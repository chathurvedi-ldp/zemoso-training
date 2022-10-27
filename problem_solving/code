import heapq
tree={}
class node:
    def __init__(self, freq, symbol, left=None, right=None):
        self.freq = freq
        self.symbol = symbol
        self.left = left
        self.right = right
        self.huff = ''
         
    def __lt__(self, nxt):
        return self.freq < nxt.freq
def printNodes(node, val=''):
    newVal = val + str(node.huff)
    if(node.left):
        printNodes(node.left, newVal)
    if(node.right):
        printNodes(node.right, newVal)
    if(not node.left and not node.right):
        tree[node.symbol]=newVal
message=input()
chars = []
for i in message:
    if i not in chars:
        chars.append(i)
freq = [message.count(i) for i in chars]
nodes = []
for x in range(len(chars)):
    heapq.heappush(nodes, node(freq[x], chars[x]))
 
while len(nodes) > 1:
    left = heapq.heappop(nodes)
    right = heapq.heappop(nodes)
    left.huff = 0
    right.huff = 1
    newNode = node(left.freq+right.freq, left.symbol+right.symbol, left, right)
    heapq.heappush(nodes, newNode)
printNodes(nodes[0])
new_message=''
for i in message:
    new_message+=tree[i]
print('Huffman tree : ')
print(tree)
print('Given message : '+message)
print('Encrypted message : '+new_message)