from py2neo import Graph
from py_ltk import nltk_function
from ml import ml_predict

def make_graph(sentance):
    graph= Graph("http://localhost:7474", auth=('neo4j',"123"))

    #sentance = input("enter a sentance: ")
    
    label_1, relation, label_2 = nltk_function(sentance)

    type1 = ml_predict(label_1)
    type2 = ml_predict(label_2)

    query="""
    MERGE (p:%s{label:'%s'})
    MERGE (a:%sl{label:'%s'})
    MERGE (p)-[:%s]->(a)
    """%(type1, label_1, type2, label_2, relation)

    #print(query)
    graph.run(query)

#make_graph("ALi have car")