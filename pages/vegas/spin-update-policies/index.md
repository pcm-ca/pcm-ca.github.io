---
title: "Spin update policies"
---

**𝕍egas** supports eight possible update policies for the ions. These are **random**, **flip**, **qising**, **adaptive**, **cone30**, **cone15**, **hn30** and **hn15**.

- **random**

    This policy generates a random vector over a sphere of radius one and multiply it by the spin norm. To generate the random vector, you should choose $u$ and $v$ to be random variates on $\left( 0, 1 \right)$. Then
    
    $\phi = 2\pi u$
    
    $\theta = \arccos \left( 2v - 1 \right)$

    and using spherical coordinates

    $S_x = \left|\mathbf{S}\right| \sin \left( \theta \right) \cos \left( \phi \right)$

    $S_y = \left|\mathbf{S}\right| \sin \left( \theta \right) \sin \left( \phi \right)$

    $S_z = \left|\mathbf{S}\right| \cos \left( \theta \right)$

    where $\left|S\right|$ is the spin norm. In this way, you get a random spin direction $\mathbf{S^{\prime}}$ with a uniform distribution $\mathbf{S^{\prime}} = S_x \hat{i} + S_y \hat{j} + S_z \hat{k}$.
    
    >Note that generates a random $\phi$ variating on $\left[ 0, 2\pi \right)$ and a random $\theta$ variating on $\left[ 0, \pi \right]$ is a **bad** way to generate a random vector, since the area element $dA = \sin\left(\theta\right)d\theta d\phi$ is a function of $\phi$. For this reason, the vectors will prefer the poles.

    [Wolfram Mathworld](http://mathworld.wolfram.com/SpherePointPicking.html) gives us more detailed information about it and shows some graphical schemes:
    <center><img alt="Image" src="http://mathworld.wolfram.com/images/eps-gif/SphericalDistribution_900.gif"/></center>


- **flip**

    This policy takes the spin direction and invert it. It is to say, the new spin direction will be $\mathbf{S^{\prime}} = -\mathbf{S}$. Moreover, the spin direction will only be taken on the directions $\hat{k}$ and $-\hat{k}$. For more information, please consult [this chapter](https://www.google.com.co/url?sa=t&rct=j&q=&esrc=s&source=web&cd=8&cad=rja&uact=8&ved=0ahUKEwiYsrHQ-P_SAhUDQCYKHQOOB3cQFghYMAc&url=http%3A%2F%2Fwww.springer.com%2Fcda%2Fcontent%2Fdocument%2Fcda_downloaddocument%2F9783319210537-c2.pdf%3FSGWID%3D0-0-45-1522375-p177545420&usg=AFQjCNE-Y66XUN-Z_98azVE2NGIdPCTvZQ&sig2=IHcjjbyuyiHG_X_bjpEjHg), which gives us a good explanation about the Ising Model.

- **qIsing**

    Unlike the Ising update policy, the qIsing get all possible projections of the spin. These values are $-\left|\mathbf{S}\right|$, $-\left|\mathbf{S}\right| + 1$, $...$, $\left|\mathbf{S}\right| - 1$, $\left|\mathbf{S}\right|$. In this case, $\left|\mathbf{S}\right|$ should be multiple of $1/2$. Otherwise, the projections won't be symmetric. Moreover, note that there are $2\left|\mathbf{S}\right| + 1$ possible projections. For example, if $\left|\mathbf{S}\right| = 3/2$, there will be 4 possible projections $\left(-3/2, -1/2, 1/2, 3/2\right)$, which is consistent with $4 = 2\times 3/2 + 1$. Like the Ising update, in this policy the spin direction will only be taken on the directions $\hat{k}$ and $-\hat{k}$.


- **adaptive**

    Acá sería como explicar el algoritmo adaptativo rápidamente. No me pongo a escribir terapia en español porque a la fina no más es casi copiar y pegar del paper.

    Also known as Gaussian update. It takes the initial spin direction and update it to a point on the sphere with radius $\left|\mathbf{S}\right|$ in the vicinity of the initial position according to the expression
    
    $$\mathbf{S^{\prime}} = \left|\mathbf{S}\right| \frac{\frac{\mathbf{S}}{\left|\mathbf{S}\right|}+\sigma_{g}\mathbf{\Gamma}}{\left|\frac{\mathbf{S}}{\left|\mathbf{S}\right|}+\sigma_{g}\mathbf{\Gamma}\right|}$$

    where $\mathbf{\Gamma}$ is a Gaussian distributed random vector and $\sigma_{g}$ is the width of the cone around the initial spin $\mathbf{S}$. Note that, initially, the spin $\mathbf{S}$ is normalized in order to add $\sigma_{g}\mathbf{\Gamma}$. The new expression is normalized again and mutiplied by the spin norm to keep the magnitud of the spin. The value of $\sigma_{g}$ is generally chosen to be a temperature function of the form

- **cone30** and **cone15**

    Cone30 y cone15 actualiza la dirección del espín a una dentro de una vecindad de 30 y 15 grados, respectivamente. Ese 30 y 15 corresponde al ángulo de opening o algo así se llama eso. Para lograr esto, se emplea la [Fórmula de rotación de Rodrigues](https://en.wikipedia.org/wiki/Rodrigues'_rotation_formula).

- **hn30** and **hn15**
    
    Corresponden al algoritmo de Hinzke-Nowak con un ángulo de 30 y 15 grados, respectivamente, para el movimiento dentro del cono. Recordemos que el algoritmo de Hinzke-Nowak consiste en seleccionar aleatoriamente en cada paso Monte Carlo, con una probabilidad de 1 en 5, 3 en 5 y 1 en 5, un movimiento flip, random y cono, respectivamente, y aplicarlo a todos los sitios.
