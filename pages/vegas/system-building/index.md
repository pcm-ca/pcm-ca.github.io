---
title: "System building"
---

A magnetic system is represented by three files in 𝕍egas:

* Sample file (required): Contains structural and magnetic parameters of the system.
* Anisotropy file (required): Contains the anisotropy parameters of the system.
* Initial state file (optional): Contains a system magnetization state that can be used to start the simulation.

These files, written in plain text, must be constructed according to specified formats.

## Sample file

The first line of this file is composed by three values separated by spaces or tabs:

``` bash
num_ions    num_interactions    num_types
```

where **num_ions**, **num_interactions** and **num_types** are the total number of ions, interactions and types of ions, respectively.

The following **num_types** lines correspond to the ion type names. Each line contains a value, which is a string corresponding to an ion type name. For example, in the case of a system composed by two ion types (**Fe2** and **Fe3+**), these lines should look like this:

```bash
Fe2+
Fe3+
```

These lines are used to categorize the ions because some data is saved during the computations according to the types.

The following **num_ions** lines correspond to the ions parameters. These lines must have the following format:

```python
index px py pz spinNorm hx hy hz type updatePolicy
```
where:
- **index** (*int*) is the 0-index indicator of the ion. The largest **index** must be equal to **num_ions** - 1.
- **px**, **py** and **pz** (*floats*) are the spatial coordinates x, y and z of the ions, repectively.
- **spinNorm** (*float*) is the norm of the spin.
- **hx**, **hy** and **hz** (*floats*) are the x, y and z components of the magnetic field vector, respectively. This vector is a unit vector, however, depending on the application, it could be modified.
- **type** (*string*) is the type of the ion.
- **updatePolicy** is the update policy for the spin moment of the ion. It must take one of these values: [**random**, **flip**, **qising**, **adaptive**, **cone30**, **cone15**, **hn30**, **hn15**]. Information about the update policies can be found in the [Spin update policies section](/vegas/spin-update-policies/).

The following **num_interactions** lines correspond to the ion interactions in the system. These lines must have the following format:

```bash
index_A index_B Jex
```
This indicates that the site with index **index_A** has a neighbor with index **index_B**, and they are coupled with an exchange interaction constant equal to **Jex**. Therefore, if isotropic exchange coupling is desired, it must be included a line of **index_B** with neighbor **index_A**, coupled with an exchange interaction constant equal to **Jex**.

## Anisotropy file

This file can take two formats, for uniaxial and cubic anisotropy. In both cases the file must contain **num_ions** lines. In the case of uniaxial anisotropy, the lines must have the following format:

```bash
Ax Ay Ay kan
```

where **Ax**, **Ay** and **Az** are the components of the anisotropy axis and **kan** is the value of the anisotropy constant.  On the other hand, for cubic anisotropy, the lines must have the following format:

```bash
Ax Ay Ay Bx By By kan
```

where **Ax**, **Ay**, **Az**, **Bx**, **By** and **Bz** are the components of two perpendicular vectors, $\vec{A}$ and $\vec{B}$, and **kan** is the anisotropy constant. The third vector is calculated by the cross product between $\vec{A}$ and $\vec{B}$. Therefore, the cubic anisotropy is composed by these three vectors.

## Initial state file

This file must contain **num_ions** lines, which must have the following format:

```bash
Sx Sy Sz
```

where **Sx**, **Sy** and **Sz** are the x, y and z components of the spin moment directions, respectively. $\sqrt{S_x^2 + S_y^2 + S_z^2}$ must be equal to the **spinNorm** of the respective ion.


---
><a class="Link" href="sample.dat" target="_blank">Here</a> you can download a typical sample file for a bulk material of edge length equal to $10$ and periodic boundary conditions. The type of the ions is *generic* and the spin is equal to $1.0$. The first line (`1000 6000 1`) indicates that there are $10 \times 10 \times 10 = 1000$ ions and $6000$ interactions, because each ion has $6$ neighbors, and $1$ ion type. All ions have a magnetic field axis equal to $[0.0, 0.0, 1.0]$ and they are going to be updated with a *random* spin update policy. All the ions are coupled with an exchange interaction constant equal to $1.0$. It is possible to verify the line number of the last line, which must be the line $1000 + 6000 + 1 + 1 = 7002$. <a class="Link" href="anisotropy.dat" target="_blank">Here</a>  you can download an anisotropy file for uniaxial anisotropy along the $z$ axis and an anisotropy consant equal to $0.01$. Finally, <a class="Link" href="initialstate.dat" target="_blank">here</a> you can download an initial state file where all the ions spin moments are pointing along the $+z$ direction.
---


𝕍egas has a python-based tool, 𝕍egas-lattice, for building systems with different shapes, structures and magnetic properties. 𝕍egas lattice provides the essential routines to generate regular graph lattices in linear time, as well as some cuts of those lattices for nanoparticles and randomly depleted lattices. Detailed documentation of 𝕍egas lattice can be found at [its GitHub repository](https://github.com/pcm-ca/vegas-lattice-rs). However, it is also possible to build systems using simple python scripts. Examples of sample, anisotropy and initial state files created using python scripts can be found in the [Tutorials](/vegas/tutorials/) section.

---

* [Home](/vegas/)
* [Installation](/vegas/installation/)
* [Model and method](/vegas/model-and-method/)
* [Simulation and data analysis](/vegas/simulation-and-data-analysis/)
* [Tutorials](/vegas/tutorials/)