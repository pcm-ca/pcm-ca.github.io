# Installation

Until date, it is so easy to install **𝕍egas** in Ubuntu 14.* and 16.*. In the future. the installation will be so easy. We are working in this.

In order to install **𝕍egas** you need to have installed in your computer the libraries for [HDF5](https://support.hdfgroup.org/HDF5/), [JSON](https://en.wikibooks.org/wiki/JsonCpp) and, ofcourse, g++. Let's talk about HDF5 and JSON. HDF5 is a data model, library, and file format for storing and managing data. Data is saved in binary such that the writing and reading is so fast. We use HDF5 because the simulation history usually is huge. If we would save the data in text, a simulation history could have a size until 30 Gb ... that is a bad idea. For this reason we decided to use HDF5. On the other hand, we used JSON to read the input for the simulation. It is a pretty format for inputs.

For install HDF5 and JSON in your PC, you need