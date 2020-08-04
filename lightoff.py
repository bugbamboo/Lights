#!/usr/bin/env python
# coding: utf-8

# In[6]:


import serial, time
ser = serial.Serial('COM3',9600)
time.sleep(2)
ser.write(b'F')
time.sleep(2)
ser.close()
print('lights off')


# In[ ]:




