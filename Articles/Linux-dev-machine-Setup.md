### Change Screen Size

From: https://superuser.com/questions/518484/how-can-i-increase-the-hyper-v-display-resolution

	sudo apt-get install linux-image-extra-virtual
	sudo vim /etc/default/grub
	
	GRUB_CMDLINE_LINUX_DEFAULT="quiet splash video=hyperv_fb:1920x1080"
	GRUB_CMDLINE_LINUX="quiet splash video=hyperv_fb:1920x1080"

sudo update-grub

### Setting Up VMConnect - Copy/Paste

Getting copy and paste working is a nightmare. I think the basic problem was that I was trying to use VMConnect to connect to a linux box which is not supported. If you use XRdp the opensource version then you can get it working

**Note** make sure you enable login on your Ubuntu as this was the only thing I did different.

* [Hyper-V Virtual Machine Connection](https://docs.microsoft.com/en-gb/windows-server/virtualization/hyper-v/learn-more/hyper-v-virtual-machine-connect)
* [Editing VMConnect session settings](https://docs.microsoft.com/en-us/virtualization/community/team-blog/2017/20170202-editing-vmconnect-session-settings)
* [Use local resources on Hyper-V virtual machine with VMConnect](https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/learn-more/use-local-resources-on-hyper-v-virtual-machine-with-vmconnect#requirements-for-using-local-resources)

Scott hanselman to the rescue. Got it working using this post:

* [Using Enhanced Mode Ubuntu 18.04 for Hyper-V on Windows 10](https://www.hanselman.com/blog/using-enhanced-mode-ubuntu-1804-for-hyperv-on-windows-10)

### Using Ansible to setup Dev Machine

It is possible to create an ansible play book which will install all stuffs ready to create your dev machine. Anything that can be installed via apt can be installed using the simple template below. For example:

* git
* docker
* vscode
* vim
* postman

#### Install Ansible

First we need to install ansible:

```bash
$ sudo apt update
$ sudo apt install software-properties-common
$ sudo apt-add-repository --yes --update ppa:ansible/ansible
$ sudo apt install ansible
```

Now we can install apps via play books:

```yaml
---
- name: MachineSetup
  hosts: localhost 
  become: yes
  become_user: root
  tasks:

    - name: install docker is installed
        apt:
        name: docker.io 
```

Save above file as `git.yml` then run:

```
ansible-playbook docker.yml
```

Example:

![image-20210409103322743](D:\Code\secondlife\Blog\.images\ansible-play-example-install-docker.png)



### Install docker

This is from the docs, not so sure why its quite so complex??? The playbook above works quite well.


```bash
#
# Allow apt to use over https (?)
#
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

#
# Add CPG
#
url -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

#
# Set stable repository
#
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

```

- [Setup Gui in WSL](https://medium.com/@japheth.yates/the-complete-wsl2-gui-setup-2582828f4577)

- dotnet core 5.0 SDK
- git
- visual studio code
- postman

### Gnome Tweaks

The Gnome tweaks site has some nice UI tweaks which makes your dev box much more cool to use:

- install chrome-gnome-shell
- install gnome-tweak-tool
- Install gnome transparent top bar
- Install arc menu
- install menu dock

### Setting up your bashrc

Linux has a `.bashrc` file in your home directory which is used similar to the `$profile` file in powershell:

```bash
 vim ~/.bashsrc
```

A common thing to do is setup some aliases for ls:

```bash
  alias cls=clear
  alias la='ls -A'
  alias ll='ls -alF'
  alias l='ls -CF'
```

