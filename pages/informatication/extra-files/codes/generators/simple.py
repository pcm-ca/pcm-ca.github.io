import numpy
import matplotlib.pyplot as plt

from .utils import add_noise


class Generator(object):

    @property
    def data(self):
        return self.x, self.y

    def plot(self, axis=None, loglog=False, label='label', **kwargs):
        axis = axis or plt.gca()
        plot_command = axis.plot if not loglog else axis.loglog
        plot_command(self.x, self.y, label=getattr(self, label), **kwargs)


class LineGenerator(Generator):

    form = '$y = mx + b$'

    def __init__(self):
        self.m, self.b = numpy.random.choice(
            list(range(1, 100)),
            size=2
        )
        self.x = numpy.linspace(0, 10, 30)
        self.y = self.m * self.x + self.b
        add_noise(self.y, noise=0.1)

    @property
    def params(self):
        return self.m, self.b

    @property
    def label(self):
        return f'$y = {self.m:.3}x {self.b:+.3}$'


class QuadraticGenerator(Generator):

    form = '$y = a x^2$'

    def __init__(self):
        self.a = numpy.random.choice(list(range(1, 20)))
        self.x = numpy.linspace(0, 5, 30)
        self.y = self.a * self.x ** 2.0
        add_noise(self.y, noise=0.1)

    @property
    def params(self):
        return self.a

    @property
    def label(self):
        return f'$y = {self.a:.3f}x^2$'


class ExponentialGenerator(Generator):

    form = '$y = A x^n$'

    def __init__(self):
        self.a = numpy.random.uniform(1, 20)
        self.n = numpy.random.chisquare(3)
        self.x = numpy.linspace(0.1, 10, 30)
        self.y = self.a * self.x ** self.n
        add_noise(self.y, 0.01, multiply=True)

    @property
    def params(self):
        return self.a, self.n

    @property
    def label(self):
        return f'$y = {self.a:.3} x ^ {{{self.n:+.3}}}$'

