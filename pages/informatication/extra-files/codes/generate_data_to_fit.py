import click
import numpy as np

from data_tools import generate_and_save_to, add_noise


def generate_linear():
    m, b = np.random.choice(
        list(range(1, 100)),
        size=2
    )
    x = np.linspace(0, 10, 30)
    y = m * x + b
    add_noise(y)
    return x, y


def generate_quadratic():
    """
    Generates a quadratic shaped data set.

    :return: x, and y values as arrays
    """
    a = np.random.choice(list(range(1, 20)))
    x = np.linspace(0, 5, 30)
    y = a * x ** 2.0
    add_noise(y)
    return x, y


def generate_exponential():
    """
    Generates an exponential shaped data set.

    :return:  x, and y values as arrays
    """
    x = np.linspace(0.1, 10, 30)
    a = np.random.uniform(1, 20)
    n = np.random.chisquare(3)
    y = a * x ** n
    add_noise(y, 0.01, multiply=True)
    return x, y


@click.command()
@click.option('--compress', '-c', is_flag=True,
              help='compress the data files')
@click.option('--linear', '-l', default=2,
              help='number of linear data sets')
@click.option('--quadratic', '-q', default=2,
              help='number of quadratic data sets')
@click.option('--exponential', '-q', default=2,
              help='number of exponential data sets')
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
