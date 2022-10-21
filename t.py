"""
using ascii characters in a terminal, write a program that render a rotating cube in python with no arguments
"""

import time
import os

def clear_screen():
    os.system("cls")

def rotate_cube(cube):
    """
    rotating cube
    """

    cube[0][0] = cube[2][0]
    cube[0][1] = cube[1][0]
    cube[0][2] = cube[0][0]
    cube[1][0] = cube[2][1]
    cube[1][1] = cube[1][1]
    cube[1][2] = cube[0][1]
    cube[2][0] = cube[2][2]
    cube[2][1] = cube[1][2]
    cube[2][2] = cube[0][2]

    return cube


def print_cube(cube, shading):
    """
    print the cube to screen
    """

    clear_screen()
    print("\r" + "".join(cube[0]) + shading)
    print("\r" + "".join(cube[1]) + shading)
    print("\r" + "".join(cube[2]) + shading)


def init_cube():
    """
    init the cube
    """

    cube = []

    for i in range(0, 3):
        cube.append([" . "] * 40)

    return cube


def main():
    cube = init_cube()

    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    # final rotation
    cube = rotate_cube(cube)
    print_cube(cube, "")
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube)
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube)
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube)
    time.sleep(1)

    cube = rotate_cube(cube)
    print_cube(cube)
    time.sleep(1)

if __name__ == '__main__':
    main()