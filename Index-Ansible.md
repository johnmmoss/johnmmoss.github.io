* [Installing Ansible on Ubuntu](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-ansible-on-ubuntu)



```bash
# Ping all nodes
ansible all -m ping

# Run command Echo on all nodes
ansible all -a "/bin/echo hello"
```



Ansible can be used to [run ad hoc commands](https://docs.ansible.com/ansible/latest/user_guide/intro_adhoc.html#id4) on the node servers.



**A play** is an ordered set of tasks which should be run against hosts selected from your inventory.

**A playbook** is a text file that contains a list of one or more plays to run in order.





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



```bash
ansible-playbook docker.yml
```

