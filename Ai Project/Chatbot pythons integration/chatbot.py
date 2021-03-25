import aiml
from python import make_graph

# Create the kernel and learn AIML files
kernel = aiml.Kernel()
kernel.learn("std-startup.xml")
kernel.respond("load aiml b")

# Press CTRL-C to break this loop
while True:
    sentance=input("Enter your message >> ")
    make_graph(sentance)
    print(kernel.respond(sentance))