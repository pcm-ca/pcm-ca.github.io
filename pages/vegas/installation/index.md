---
title: "Installation"
---

In order to execute a simulation using 𝕍egas, two executables are available for Linux 64 bits and Windows 7 (or later) operating systems. However, 𝕍egas can also be built on Ubuntu 14.* and 16.* operating systems.

## Linux and Windows executables

Please find the links to download the executable files for Linux and Windows here:

[![Icon made by Freepik from www.flaticon.com](linux.png "𝕍egas for linux")](https://github.com/jdalzatec/vegas/raw/master/executables/vegas-linux64/vegas)
[![Icon made by Freepik from www.flaticon.com](windows.png "𝕍egas for windows")](https://github.com/jdalzatec/vegas/raw/master/executables/vegas-win64/install_vegas.exe)

With these executables, you do not need to build 𝕍egas from source files.

- **Linux**: Just place the executable in the ```/usr/bin``` folder in order to execute 𝕍egas from any location. It is possible that you require sudo permissions to move or copy the 𝕍egas executable to the root system. 
- **Windows**: You must execute the *install_vegas.exe* file in order to install 𝕍egas to the Program Files folder. The 𝕍egas folder is added to the path in the environmental variables and, for this reason, 𝕍egas can be executed from any location from a CMD. It is possible that you need to deactivate the antivirus software. We are working to add a sign to the *install_vegas.exe* to make it more secure to the windows system.

If everything went well, when you run the command ```vegas``` in a terminal (Linux) or CMD (Windows), a message like this should appear

<center>
    <img src="output.png" alt="Image"/>
</center>

At this point, you just need a JSON input file with the simulation parameters, along with the sample files, to run a simulation using 𝕍egas.

## Building 𝕍egas on Ubuntu

In order to build and install 𝕍egas on Ubuntu 14.* and 16.* operating systems, it is required to install the libraries of [HDF5](https://support.hdfgroup.org/HDF5/), [JSON](https://en.wikibooks.org/wiki/JsonCpp) and g++. HDF5 is a data model, library, and file format for storing and managing data. HDF5 is built for fast I/O processing and storage. 𝕍egas uses HDF5 because the results output file, which stores the history of the simulation, is usually very large. If the simulation results were stored in plain text, the output file could have a size of several gigabytes. However, using HDF5, the output file size is in the order of megabytes. Aso, JSON is a very useful and simple format to input the initial parameters to the simulation.

To install HDF5, JSON and g++, it is necessary to get the libhdf5-dev, libjsoncpp-dev and g++ libraries, which can be done by typing the following command on a terminal

```bash
sudo apt-get install libjsoncpp-dev libhdf5-dev g++
```

Moreover, to compile the files, cmake (version > 3.5.1) needs to be installed. By default, Ubuntu 14.* and 16.* have in their repositories a valid version of cmake. To install cmake, run

```bash
sudo apt-get install cmake
```

To check the version of cmake, run

```bash
cmake --version
```

At this point, all the dependencies required to install 𝕍egas are installed. Now, download 𝕍egas from the master branch [here](https://github.com/jdalzatec/vegas/archive/master.zip), unzip and ```cd``` to the respective folder. If you run ```ls```, you should get the following output

```bash
analyzers  code  compilers  Dockerfile  executables  README.md
```

where **analyzers**, **code**, **compilers** and **executables** are folders and ~Readme.md~ and ~Dockerfile~ are files. To build 𝕍egas with ```cmake```, ```cd``` to **compilers/linux/** and create a folder named build, ```cd``` to this new folder, run ```cmake ..```, and then run ```make```. All of this can be done by just running the following command

```bash
mkdir compilers/linux/build && cd compilers/linux/build && cmake .. && make
```

The following output should be visualized

```bash
-- The CXX compiler identification is GNU 5.4.0
-- The C compiler identification is GNU 5.4.0
-- Check for working CXX compiler: /usr/bin/c++
-- Check for working CXX compiler: /usr/bin/c++ -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Check for working C compiler: /usr/bin/cc
-- Check for working C compiler: /usr/bin/cc -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Detecting C compile features
-- Detecting C compile features - done
-- Found HDF5: /usr/lib/x86_64-linux-gnu/hdf5/serial/lib/libhdf5.so;/usr/lib/x86_64-linux-gnu/libpthread.so;/usr/lib/x86_64-linux-gnu/libsz.so;/usr/lib/x86_64-linux-gnu/libz.so;/usr/lib/x86_64-linux-gnu/libdl.so;/usr/lib/x86_64-linux-gnu/libm.so (found version "1.8.16") 
-- /usr/include/hdf5/serial
-- Found jsoncpp: /usr/include  
-- /usr/include/jsoncpp/json
-- Configuring done
-- Generating done
-- Build files have been written to: /home/jdalzatec/Desktop/vegas-master/compilers/linux/build
Scanning dependencies of target vegas
[ 16%] Building CXX object CMakeFiles/vegas.dir/home/jdalzatec/Desktop/vegas-master/code/main.cc.o
[ 33%] Building CXX object CMakeFiles/vegas.dir/home/jdalzatec/Desktop/vegas-master/code/src/lattice.cc.o
[ 50%] Building CXX object CMakeFiles/vegas.dir/home/jdalzatec/Desktop/vegas-master/code/src/reporter.cc.o
[ 66%] Building CXX object CMakeFiles/vegas.dir/home/jdalzatec/Desktop/vegas-master/code/src/system.cc.o
[ 83%] Building CXX object CMakeFiles/vegas.dir/home/jdalzatec/Desktop/vegas-master/code/src/atom.cc.o
[100%] Linking CXX executable vegas
[100%] Built target vegas
```

Once this process ends, in the **build** folder some files and a folder should have been created, along with a executable file named 𝕍egas. This file is the executable used to run the simulations in 𝕍egas. You can place this file in all the folders where you are going to run a simulation. However, it is better place the 𝕍egas executable in the ```/usr/bin/``` folder, such that 𝕍egas can be executed anywhere. To do this, run ```sudo make install``` and 𝕍egas will be placed in the ```/usr/bin/``` folder.

If everything went well, when you run the command ```vegas``` in a terminal, a message like this should appear

<center>
    <img src="output.png" alt="Image"/>
</center>

At this point, you just need a JSON input file with the simulation parameters, along with the sample files, to run a simulation using 𝕍egas.


---

* [Home](/vegas/)

* [Model and method](/vegas/model-and-method/)

* [System building](/vegas/system-building/)

* [Simulation and data analysis](/vegas/simulation-and-data-analysis/)

* [Tutorials](/vegas/tutorials/)
