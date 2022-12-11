//// add doc

const docRef = collection(db, "bar");
async function getCaff() {
  await addDoc(docRef, {
    name: "mezzanino",
    product: [
      { prodotto: "Popcorn salato", exp: 7 },
      { prodotto: "Popcorn dolce", exp: 7 },
      { prodotto: "chips", exp: 7 },
      { prodotto: "Nachos", exp: 7 },
      { prodotto: "Salsa formaggio", exp: 10 },
      { prodotto: "Maionese", exp: 10 },
      { prodotto: "ketchup", exp: 10 },
      { prodotto: "senape", exp: 10 },
      { prodotto: "Pane big", exp: 4 },
      { prodotto: "Pane regular", exp: 4 },
      { prodotto: "Hotdog Big", exp: 3 },
      { prodotto: "Hotdog regular", exp: 3 },
    ],
  });
}

//// get docs

async function getCaff() {
  const data = await getDocs(docRef);
  console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}
