"""
Some tools for data generation purposes
"""

import numpy


def add_noise(y, noise=None, multiply=False):
    noise = noise or numpy.random.chisquare(3)
    noise_to_add = numpy.random.normal(0, noise, size=y.shape)
    if multiply:
        noise_to_add *= y
    y += noise_to_add
