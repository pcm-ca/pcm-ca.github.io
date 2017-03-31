---
title: "Spin update policies"
---

**𝕍egas** supports five possible update policies for the ions. These are [**heisenberg**, **ising**, **qising**, **cone**, **hinzke_nowak**].

- **Heisenberg**

    This policy generates a random vector over a sphere of radius one and multiply it by the spin norm. To generate the random vector, you should choose $u$ and $v$ to be random variates on $\left( 0, 1 \right)$. Then
    
    $\phi = 2\pi u$
    
    $\theta = \arccos \left( 2v - 1 \right)$

    and using spherical coordinates

    $S_x = \left|\mathbf{S}\right| \sin \left( \theta \right) \cos \left( \phi \right)$

    $S_y = \left|\mathbf{S}\right| \sin \left( \theta \right) \sin \left( \phi \right)$

    $S_z = \left|\mathbf{S}\right| \cos \left( \theta \right)$

    where $\left|S\right|$ is the spin norm. In this way, you get a random spin vector $\mathbf{S}$ with a uniform distribution $\mathbf{S} = S_x \hat{i} + S_y \hat{j} + S_z \hat{k}$.
    
    >Note that generates a random $\phi$ variating on $\left[ 0, 2\pi \right)$ and a random $\theta$ variating on $\left[ 0, \pi \right]$ is a **bad** way to generate a random vector, since the area element $dA = \sin\left(\theta\right)d\theta d\phi$ is a function of $\phi$. For this reason, the vectors will prefer the poles.

    [Wolfram Mathworld](http://mathworld.wolfram.com/SpherePointPicking.html) gives us more detailed information about it and shows some graphical schemes:
    <center><img alt="Image" src="http://mathworld.wolfram.com/images/eps-gif/SphericalDistribution_900.gif"/></center>


- **Ising**

    This policy considers the spin value along +*z-axis* or -*z-axis*. It is to say, the spin only can be $\mathbf{S} = \left|\mathbf{S}\right|\hat{k}$ or $\mathbf{S} = -\left|\mathbf{S}\right|\hat{k}$. Note that only two projections are taken into account. For more information, please consult [this chapter](https://www.google.com.co/url?sa=t&rct=j&q=&esrc=s&source=web&cd=8&cad=rja&uact=8&ved=0ahUKEwiYsrHQ-P_SAhUDQCYKHQOOB3cQFghYMAc&url=http%3A%2F%2Fwww.springer.com%2Fcda%2Fcontent%2Fdocument%2Fcda_downloaddocument%2F9783319210537-c2.pdf%3FSGWID%3D0-0-45-1522375-p177545420&usg=AFQjCNE-Y66XUN-Z_98azVE2NGIdPCTvZQ&sig2=IHcjjbyuyiHG_X_bjpEjHg), which gives us a good explanation about the Ising Model.

- **qIsing**

    Unlike the Ising update policy, the qIsing get all possible projections of the spin. These values are $-\left|\mathbf{S}\right|$, $-\left|\mathbf{S}\right| + 1$, $...$, $\left|\mathbf{S}\right| - 1$, $\left|\mathbf{S}\right|$. In this case, $\left|\mathbf{S}\right|$ should be multiple of $1/2$. Otherwise, the projections won't be symmetric. Moreover, note that there are $2\left|\mathbf{S}\right| + 1$ possible projections. For example, if $\left|\mathbf{S}\right| = 3/2$, there will be 4 possible projections $\left(-3/2, -1/2, 1/2, 3/2\right)$, which is consistent with $4 = 2\times 3/2 + 1$.
- **Cone**
- **Hinze-Nowak**

