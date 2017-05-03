import click


@click.command()
@click.argument('students', type=click.File('r'))
def generate_exam(students):
    for student in students.readlines():
        click.echo(student.strip())


if __name__ == '__main__':
    generate_exam()
