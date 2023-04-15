const friends = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
}

const breadthSearch = name => {
  let searchQueue = friends[name]

  const searched = []
  const queueIsNotEmpty = searchQueue.length > 0

  const isInQueue = personName => searched.includes(personName)
  const isSeller = name => name[name.length - 1] === "m"

  const enqueue = list => [...searchQueue, ...list]
  const dequeue = () => searchQueue.shift()

  while (queueIsNotEmpty) {
    const person = dequeue()

    if (!isInQueue(person)) {
      if (isSeller(person)) {
        console.log(`${person} is a seller`)
        return true
      } else {
        searchQueue = enqueue(friends[person])
        searched.push(person)
      }
    }
  }
}

breadthSearch("you")
