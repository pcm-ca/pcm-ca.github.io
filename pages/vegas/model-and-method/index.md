---
title: "Model and method"
---


## Classical spin Hamiltonian

Magnetic systems simulated using Vegas are modeled by the classical Heisenberg model. The Heisenberg spin Hamiltonian, which includes the exchange, anisotropy and applied field interactions, is given by
$$\mathcal{H}=-\sum_{i\neq j}J_{ij}\mathbf{S}_{i}\cdot\mathbf{S}_{j}-\mu_{s}B\sum_{i}\left(\mathbf{S}_{i}\cdot\mathbf{n}_{i}\right)-\mathcal{H}_{ani}$$

where $J_{ij}$ is the exchange interaction constant between sites $i$ and $j$, $B$ and $\mathbf{n}_{i}$ are the magnetic field intensity and direction of site $i$, respectively, $\mu_{s}$ is the atomic magnetic moment, $\mathbf{S}_{i}$ and $\mathbf{S}_{j}$ are the spin moment directions of sites $i$ and $j$, respectively, and $\mathcal{H}_{ani}$ is the anisotropy term. The anisotropy term can take the form of uniaxial anisotropy or cubic anisotropy.

## Monte Carlo Metropolis algorithm

Vegas simulates the time evolution of a classical spin magnetic system using the Monte Carlo Metropolis algorithm, where new configurations of a system are generated from a previous state using a transition probability. Different [**spin update policies**](/vegas/spin-update-policies/) are implemented in Vegas, including a highly efficient adaptive move. 

* [**Home**](/vegas/)
* [**Installation**](/vegas/installation/)
* [**System building**](/vegas/system-building/)
* [**Simulation and data analysis**](/vegas/simulation-and-data-analysis/)
* [**Tutorials**](/vegas/tutorials/)