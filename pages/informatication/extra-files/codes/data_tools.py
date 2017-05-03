"""
Data generation tools
"""

import numpy


def generate_by_kind(kind, generators=None):
    """
    Generates a data set according to the given kind.

    Raises a value error if the implementation is not available in this module.

    :param kind: kind of data set to generate
    :param generators: module to find the generators, globals() by default
    :return: x and y values of the data set
    """
    if not generators:
        generators = globals()
    generator = generators.get(f'generate_{kind}', None)
    if not generator:
        raise ValueError(f'generate_{kind} is not available')
    return generator()


def generate_and_save_to(kind, filename, generators=None):
    x, y = generate_by_kind(kind, generators)
    numpy.savetxt(filename, numpy.array([x, y]).T)


def add_noise(y, noise=None, multiply=False):
    noise = noise or numpy.random.chisquare(3)
    noise_to_add = numpy.random.normal(0, noise, size=y.shape)
    if multiply:
        noise_to_add *= y
    y += noise_to_add
