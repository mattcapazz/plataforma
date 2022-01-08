import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  onSnapshot,
  where,
  query,
  orderBy,
  limit,
} from "@firebase/firestore";

const db = getFirestore();

export default function Search() {
  const [Data, setdata] = useState("");
  const [search, setSearch] = useState("");
  const searchRecords = (e) => {
    e.preventDefault();

    const collectionref = collection(db, "Rebotuca");
    const q = query(
      collectionref,
      where("Heading", ">=", "${search}"),
      orderBy("Heading", "asc")
    ); //
    const unsub = onSnapshot(q, (snapshot) =>
      setdata(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, key: doc.id }))
      )
    );
    return unsub;
  };

  return (
    <div>
      <form>
        <h1>Search</h1>
        {/* onKeyUp={searchRecords} onChange={(e)=>setSearch(e.target.value)} */}

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          onKeyUp={searchRecords}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="my-2">
          {Data && (
            <>
              {Data.map((i, index) => (
                <h1 key={index}>{i.Heading}</h1>
              ))}
            </>
          )}
        </div>
      </form>
    </div>
  );
}
