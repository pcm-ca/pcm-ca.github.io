import click
import numpy
from data_tools import add_noise, generate_and_save_to
from generate_data_to_fit import generate_exponential, generate_quadratic


def generate_polynomial():
    """
    Generate some polynomial data
    :return: x, and y as arrays
    """
    degree = numpy.random.choice(range(3, 7))
    x = numpy.linspace(-10, 10, 1000)
    coefficients = numpy.random.chisquare(3, size=degree) + 1
    coefficients *= numpy.random.choice([-1, 1], size=coefficients.shape)
    coefficients *= 0.5
    y = numpy.polyval(coefficients, x)
    add_noise(y, 0.1)
    return x, y


def generate_gaussian():
    """
    Generate some polynomial data
    :return: x, and y as arrays
    """
    amp = 10 * numpy.random.chisquare(3)
    width = numpy.random.chisquare(3)
    mean = numpy.random.uniform(-10 + width, 10 - width)
    x = numpy.linspace(-10, 10, 500)
    y = amp * numpy.exp(- (x - mean) ** 2 / width ** 2)
    add_noise(y, 0.1)
    return x, y


@click.command()
@click.option('--compress', '-c', is_flag=True,
              help='compress the data files')
@click.option('--polynomial', '-p', default=2,
              help='Generate this many polynomial data sets')
@click.option('--gaussian', '-g', default=2,
              help='Generate this many gaussian data sets')
@click.option('--exponential', '-3', default=1,
              help='Generate this many exponential data sets')
@click.option('--quadratic', '-3', default=1,
              help='Generate this many quadratic data sets')
def generate(compress, **kwargs):
    extension = 'txt.gz' if compress else 'txt'
    for kind, count in kwargs.items():
        click.echo(f'Will generate {count} {kind} data files')
        for i in range(count):
            generate_and_save_to(
                kind,
                f'{kind}{i:03d}.{extension}',
                generators=globals()
            )
    click.echo(
        click.style('Done!', fg='green')
    )


if __name__ == "__main__":
    generate()
