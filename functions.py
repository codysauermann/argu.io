import requests
import spacy
import openai


#acquire model by running python -m spacy download en_core_web_sm
nlp = spacy.load('en_core_web_sm')

# openai.organization = "none"
openai.api_key = "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"

def get_ents(text):
    #show entities in text
    exclusionList = ['PERSON', 'TIME', 'DATE', 'CARDINAL', 'PERCENT', 'MONEY', 'QUANTITY', 'ORDINAL', 'PRODUCT', 'NORP']
    doc = nlp(text)
    entities = []
    if doc.ents:
        for ent in doc.ents:
            if ent.label_  in exclusionList:
                pass
            else:
                entities.append([ent.text, ent.label_])
 
    if entities:
        return entities
    else:
        return 0
    

def idea_to_points(idea, engineChoice=0):
    #Summarizes list of strings using openai api
    #Running this function costs me money so please don't unless necessary for testing/compatibility purposes - Patrick
    engineChoices = ['text-davinci-002', 'text-curie-002']
    point =  openai.Completion.create(
        engine=engineChoices[engineChoice],
        prompt=f"Objectively argue why '{idea}' is reasonable",
        max_tokens=256,
        temperature=0.5)

    point = (point.choices[0]['text']).replace('\n', "")


    counter =  openai.Completion.create(
        engine=engineChoices[engineChoice],
        prompt=f"Briefly argue why '{idea}' is unreasonable",
        max_tokens=256,
        temperature=0.5)
    counter = (counter.choices[0]['text']).replace('\n', "")
    
    return point, counter
    




def wikiExplainer(title, removeEscapeChars=True, explainerLength=3):
    
    response = requests.get(
         'https://en.wikipedia.org/w/api.php',
         params={
             'action': 'query',
             'format': 'json',
             'titles': title,
             'prop': 'extracts',
             'exintro': True,
             'explaintext': True,
         }).json()
    response = requests.get("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=max&explaintext&exintro&titles=" + title.replace(" ", "_") + "|" + title.replace(" ", "_") + "&redirects=").json()
    explainer = next(iter(response['query']['pages'].values()))
    if 'extract' in explainer:
        explainer = explainer['extract']
        if removeEscapeChars:
            explainer = ''.join(c for c in explainer if c.isalnum() or c==' ')
            explainer = explainer.replace("\n", " ")
    else:
        explainer = ""


    doc = nlp(explainer)
    explainer = ""
    for j,sentence in enumerate(doc.sents):
        if(j+1 > explainerLength):
            break
        else:
            explainer += str(sentence.text) + " "
    return explainer

