import click
import multiprocessing
import subprocess


def simulate(line):
    subprocess.call([line.strip()], shell=True)


@click.command()
@click.argument('filename', type=click.File(mode='r'))
@click.option('--num_threads', "-nt", type=int, default=None)
def main(filename, num_threads):
    pool = multiprocessing.Pool(processes=num_threads)
    pool.map(simulate, filename)

if __name__ == '__main__':
    main()
