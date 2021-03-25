from nltk import word_tokenize, pos_tag

#sentance = 'Anna have a cat'

def nltk_function(sentance):
    wt= word_tokenize(sentance)
    print(wt)

    pos_tagger = pos_tag(wt)

    print(pos_tagger)

    noun = []
    verb = []

    for tuple in pos_tagger:
        if tuple[1] == 'NNP':
            noun.append(tuple[0])
        if tuple[1] == 'VBP':
            verb.append(tuple[0])
        if tuple[1] == 'NN':
            noun.append(tuple[0])        

    print(noun)
    print(verb)

    return noun[0], verb[0], noun[1]

#nltk_function("Anna have a Cat")