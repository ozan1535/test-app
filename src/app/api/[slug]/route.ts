import {
  deleteField,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/helpers/firebaseConfig";
import { getData } from "@/helpers/helpers";

export const GET = async (req) => {
  try {
    const searchParams = new URLSearchParams(new URL(req.url).searchParams);
    const collection = searchParams.get("collection");
    const singleItemSlug = searchParams.get("singleItemSlug");
    const shouldFetchSingleItem =
      searchParams.get("shouldFetchSingleItem") === "true";
    const data = await getData(
      collection,
      singleItemSlug,
      shouldFetchSingleItem
    );
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "error" });
  }
};

export const POST = async (req) => {
  // TODO: Fix this temporary solution
  try {
    const searchParams = new URLSearchParams(new URL(req.url).searchParams);
    const collection = searchParams.get("collection");
    const document = searchParams.get("document");
    const data = await req.json();
    if (
      collection === "comments" ||
      collection === "emoji-reactions" ||
      collection === "favourites"
    ) {
      const dynamicKey = Object.keys(data)[0];

      data[dynamicKey].createdAt = serverTimestamp();
    } else {
      data.createdAt = serverTimestamp();
    }
    await setDoc(doc(db, collection as string, document as string), data, {
      merge: true,
    });

    return Response.json({ message: "Succesfully added" });
  } catch (error) {
    return Response.json({ error });
  }
};

export const PUT = async (req) => {
  try {
    const searchParams = new URLSearchParams(new URL(req.url).searchParams);
    const commentId = searchParams.get("commentId");
    const document = searchParams.get("document");
    const data = await req.json();
    const commentRef = doc(db, "comments", document as string);
    await updateDoc(commentRef, {
      [`${commentId}.comment`]: data.comment,
    });
    return Response.json({ message: "Succesfully added" });
  } catch (error) {
    return Response.json({ error });
  }
};

export const DELETE = async (req) => {
  try {
    const searchParams = new URLSearchParams(new URL(req.url).searchParams);
    const collection = searchParams.get("collection");
    const document = searchParams.get("document");
    const documentId = searchParams.get("documentId");
    const updateItem = doc(db, collection as string, document as string);
    await updateDoc(updateItem, {
      [documentId as string]: deleteField(),
    });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false });
  }
};
