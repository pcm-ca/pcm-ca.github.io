---
title: "System building"
---

**𝕍egas** has a defined format to build the samples.

The first line it composed by three values separated by spaces or tabs, which are:

``` bash
num_ions    num_interactions    num_types
```

where **num_ions** is the total number of ions of the system, **num_interactions** is the total number of interactions and **num_types** is the total number of types of ions.

The following **num_types** lines correspond to the type names. These lines have a value, which is a string corresponding to the ion type name. For example

```bash
Fe2+
Fe3+
```

The string only is to categorize the ions and, in the moment of computations, some data is saved related to the types. You can have the amount of types as you want.


The following **num_ions** lines correspond to the ions. These lines should have the following format:
```python
index px py pz spinNorm hx hy hz type updatePolicy
```
where:
- **index** is the 0-index indicator of the ion. The higher **index** must be equal to **num_ions** - 1. *(int)*
- **px**, **py** and **pz** are the position in x, y and z, repectively, of the ion. *(floats)*
- **spinNorm** is norm of the spin. *(float)*
- **hx**, **hy** and **hz** are the direction in x, y and z, respectively, of the magnetic field. This vector has unit norm, but depending the application, could be modified. *(floats)*
- **type** is the type of the ion. *(string)*
- **updatePolicy** is the model of update policy for the ion. Should be one of these values: [**random**, **flip**, **qising**, **adaptive**, **cone30**, **cone15**, **hn30**, **hn15**]. To get more information about these values, please read [Update Policies](/vegas/spin-update-policies/).

The following **num_interactions** lines correspond to the geometric specification of the sample because, with that, the neighbors of certain ion are assigned. The format should be

```bash
index_A index_B Jex
```
which indicates that the site with index **index_A** has a neighbor with index **index_B** and they are coupled with a exchange constant with value **Jex**. Therefore, if you want isotropic exchange coupling, must have a line of **index_B** with neighbor **index_A** coupled with a value **Jex**.

Finally, you can check the amount of lines, because the last line occupied should be the line with number equals to (**num_ions** + **num_interactions** + **num_types** + 1).


On the other hand, if you want include anisotropy to the system, anisotropy file(s) is(are) required. This file could take two formats, en el caso que sea anisotropía uniaxial o cúbica. EN el caso de anisotropía uniaxial, el formato debe ser

```bash
Ax Ay Ay kan
```

donde **Ax**, **Ay** y **Az** son los valores que indican el eje de anisotropía y **kan** es el valor de la constante de anisotropía. Este archivo debe tener **num_ions** líneas, donde la línea i-ésima corresponda al ion i-ésimo. Por otra parte, el archivo de anisotropía puede ser de la forma

```bash
Ax Ay Ay Bx By By kan
```

donde **Ax**, **Ay**, **Az**, **Bx**, **By** y **Bz** definen dos vectores ($\vec{A}$ y $\vec{B}$) no paralelos y **kan** es la constante de anisotropía. El tercer vector se genera mediante el producto vectorial entre $\vec{A}$ y $\vec{B}$ y se genera una anisotropía cúbica mediante estos 3 vectores. Cabe resaltar que un sitio puede tener cuantas anisotropías se deseen puesto que estos archivos se incluyen en el archivo de configuración json.


Finalmente, es posible que en algunos casos se desee iniciar la simulación impartiéndole al sistema un estado inicial. Para esto, se debe generar un archivo para el estado inicial que tenga el formato:

```bash
Sx Sy Sz
```

donde **Sx**, **Sy** y **Sz** corresponden a la dirección del momento magnético en x, y y z, respectivamente. . Este archivo debe tener **num_ions** líneas, donde la línea i-ésima corresponda al ión i-ésimo.  Debe tenerse en cuenta que $\sqrt{S_x^2 + S_y^2 + S_z^2}$ debe ser igual a **spinNorm** del ión respectivo. De no ser así, un error será throw.


---
><a class="Link" href="sample.dat" target="_blank">Here</a> you can open a typical sample for a bulk material of length 10, with periodic boundary conditions. The ions have type *generic* and spin 1.0. The first line say `1000 6000 1`, which indicates there are 1000 ions corresponding to 10 x 10 x 10 ions and 6000 interactions, because each ion has 6 neighbors. Then, 6000 links = 6 links/ion x 1000 ions. All sites have a field axis equal to [0.0, 0.0, 1.0] and they are going to be update with a *random* policy. All the ions are coupled with an exchange constant of 1.0. Finally, the number line of the last one should be 7002 = 1000 + 6000 + 1 + 1. Please check the before. Moreover, <a class="Link" href="anisotropy.dat" target="_blank">here</a>  you can find an anisotropy file for an uniaxial anisotropy in the z-direction with an anisotropy consant of 0.01. Finally, <a class="Link" href="initialstate.dat" target="_blank">here</a> you can find an initial state file where indicates that all site are pointing in the -z-direction.
---


Don't worry if you don't know how to build big samples. As I said before, let me to teach you with examples. There are some examples for the sample build using `python3` in the [next section](/vegas/examples/). I chose **python3** because this is wonderful to make simple scripts. If you want to learn about python3, please follow [this tutorial](/tutorials/CursilloPython/).



---

* [Home](/vegas/)
* [Installation](/vegas/installation/)
* [Model and method](/vegas/model-and-method/)
* [Simulation and data analysis](/vegas/simulation-and-data-analysis/)
* [Tutorials](/vegas/examples/)