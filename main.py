from functions import *



def main():
    wik = wikiExplainer('Ukraine')
    l = get_ents(wik)
    for x in l:
        print(x[1], x[0])
    # print(idea_to_points("We should give aid to Ukraine")) #should be in the form of a should statement

main()