//TODOS
//Leave test page with arrows on browser and come back to test page again. Items are still checked.
// I need to be able to remove questions and options.
// When items are being uploadad to database, I should see spinning

import {
  IEmojiProperty,
  IFormItems,
  IHandleFieldChange,
  IQuestion,
  IResult,
  ITabIndexStore,
  ITestProperty,
} from "@/app/types";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
} from "react";
import { db, storage } from "./firebaseConfig";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { randomBytes } from "crypto";
import { Session } from "next-auth";
import { IModalProps } from "@/components/Modal/Modal.types";

export const transformText = (string: string) => {
  // Insert a space before each uppercase letter except the first character
  const result = string.replace(/([A-Z])/g, " $1").trim();
  // Capitalize the first letter of the result
  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
};

export const handleMainPropertiesChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setFormItems: Dispatch<SetStateAction<IFormItems>>
) => {
  const { name, value } = e.target;

  setFormItems((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export const handleMediaChange = (
  e: ChangeEvent<HTMLInputElement>,
  type: string,
  setFormItems: Dispatch<SetStateAction<IFormItems>>,
  index: null | number = null
) => {
  const { files } = e.target;
  if (!files || files.length === 0) return;

  const file = files[0];

  setFormItems((prev) => {
    let updatedItems = { ...prev };

    switch (type) {
      case "main":
        updatedItems.mainMedia = file;
        break;

      case "question":
        if (index !== null && index < updatedItems.questions.length) {
          updatedItems.questions[index].questionMedia = file;
        }
        break;

      case "result":
        if (index !== null && index < updatedItems.results.length) {
          updatedItems.results[index].resultMedia = file;
        }
        break;

      default:
        break;
    }

    return updatedItems;
  });
};

export const handleFieldChange: IHandleFieldChange<IQuestion | IResult> = (
  e,
  index,
  formItems,
  setFormItems,
  fieldType
) => {
  const { name, value } = e.target;

  const updatedItems = [...formItems[fieldType]];

  if (name in updatedItems[index]) {
    updatedItems[index] = {
      ...updatedItems[index],
      [name]: value,
    };

    setFormItems((prev) => ({
      ...prev,
      [fieldType]: updatedItems,
    }));
  }
};

export const handleOptionsChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  questionIndex: number,
  optionsIndex: number,
  formItems: IFormItems,
  setFormItems: Dispatch<SetStateAction<IFormItems>>
) => {
  const { name, value } = e.target;

  const newQuestions = [...formItems.questions];

  newQuestions[questionIndex].options[optionsIndex] = {
    ...newQuestions[questionIndex].options[optionsIndex],
    [name]: value,
  };

  setFormItems((prev) => ({
    ...prev,
    questions: newQuestions,
  }));
};

export const updateTabIndex = (
  index: number,
  item: string,
  setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>
) => {
  if (item === "questionOptionTabIndex") {
    setTabIndexStore((prev) => ({
      ...prev,
      [item]: index,
    }));
  } else {
    setTabIndexStore((prev) => ({
      ...prev,
      questionOptionTabIndex: 0,
      [item]: index,
    }));
  }
};

export const addNewTab = (
  type: string,
  setFormItems: Dispatch<SetStateAction<IFormItems>>,
  questionTabIndex: number
) => {
  switch (type) {
    case "question":
      const newQuestion: IQuestion = {
        questionTitle: "",
        questionMedia: undefined,
        questionMediaUrl: "",
        options: [{ answer: "", for: "" }],
      };

      setFormItems((prev) => ({
        ...prev,
        questions: [...prev.questions, newQuestion],
      }));
      break;
    case "option":
      const newOption = {
        answer: "",
        for: "",
      };

      setFormItems((prev) => {
        const updatedQuestions = [...prev.questions];
        updatedQuestions[questionTabIndex] = {
          ...updatedQuestions[questionTabIndex],
          options: [...updatedQuestions[questionTabIndex].options, newOption],
        };
        return { ...prev, questions: updatedQuestions };
      });

      break;
    case "result":
      const newResult: IResult = {
        resultTitle: "",
        resultDescription: "",
        resultMedia: undefined,
        resultMediaUrl: "",
      };
      setFormItems((prev) => ({
        ...prev,
        results: [...prev.results, newResult],
      }));
      break;
    default:
      break;
  }
};

export const generalTabs = ["Properties", "Questions", "Results"];

export const generateFolderName = (blogTitle: string) => {
  // Replace spaces with hyphens and remove special characters for a clean folder name
  return blogTitle
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
};

export const uploadFileAndGetUrl = async (file: File, folderName: string) => {
  const storageRef = ref(storage, `tests/${folderName}/${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

export const handleRequest = async (
  data: any,
  method: string,
  handleFunction: () => void,
  url: string,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  requestFailedMessage: ReactNode
) => {
  try {
    const response = await fetch(url, {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setTimeout(() => {
        setModalProps((prev) => ({
          ...prev,
          isOpen: true,
          component: requestFailedMessage,
        }));
      }, 100);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    handleFunction();
  }
};



export const handleTestPropertyRequest = (
  session: Session | null,
  data: Record<string, ITestProperty | IEmojiProperty> | null,
  method: string,
  handleFunction: () => void,
  url: string,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  component: ReactNode,
  requestFailedMessage: ReactNode
) => {
  if (session) {
    handleRequest(
      data,
      method,
      () => handleFunction(),
      url,
      setModalProps,
      requestFailedMessage
    );
  } else {
    setModalProps((prev) => ({
      ...prev,
      isOpen: true,
      component,
    }));
  }
};

const updateManagePageStates = (
  setFormItems: Dispatch<SetStateAction<IFormItems>>,
  setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>
) => {
  setFormItems(formItemsInitialProperties);
  setTabIndexStore(tabIndexStoreInitialProperties);
};

export const handleSubmit = async (
  e: MouseEvent<HTMLButtonElement>,
  formItems: IFormItems,
  setFormItems: Dispatch<SetStateAction<IFormItems>>,
  setTabIndexStore: Dispatch<SetStateAction<ITabIndexStore>>,
  setModalProps: Dispatch<SetStateAction<IModalProps>>,
  requestFailedMessage: ReactNode
) => {
  e.preventDefault();

  const folderName = generateFolderName(formItems.title);

  try {
    // Upload main media file
    if (formItems.mainMedia) {
      const mainMediaUrl = await uploadFileAndGetUrl(formItems.mainMedia, folderName);
      formItems.mainMediaUrl = mainMediaUrl;
    }

    // Upload question media files
    const questionsWithMediaUrls = await Promise.all(
      formItems.questions.map(async (question) => {
        if (question.questionMedia) {
          question.questionMediaUrl = await uploadFileAndGetUrl(
            question.questionMedia,
            folderName
          );
        }
        return question;
      })
    );
    formItems.questions = questionsWithMediaUrls;

    // Upload result media files
    const resultsWithMediaUrls = await Promise.all(
      formItems.results.map(async (result) => {
        if (result.resultMedia) {
          result.resultMediaUrl = await uploadFileAndGetUrl(
            result.resultMedia,
            folderName
          );
        }
        return result;
      })
    );
    formItems.results = resultsWithMediaUrls;

    const { mainMedia, ...cleanedData } = formItems;
    cleanedData.questions = cleanedData.questions.map(
      ({ questionMedia, ...question }) => question
    );
    cleanedData.results = cleanedData.results.map(
      ({ resultMedia, ...result }) => result
    );
    cleanedData.category = generateFolderName(cleanedData.category);

    handleRequest(
      cleanedData,
      "post",
      () => updateManagePageStates(setFormItems, setTabIndexStore),
      `/api/post?collection=tests&document=${randomBytes(16).toString("hex")}`,
      setModalProps,
      requestFailedMessage
    );
  } catch (error) {
    //console.error("Error writing document: ", error);
  }
}; // Adjust according to your data structure

export const getData = async (
  dataCollection: string,
  document = "",
  shouldFetchSingleItem = false
) => {
  if (shouldFetchSingleItem) {
    const docRef = doc(db, dataCollection, document);

    return new Promise((resolve, reject) => {
      onSnapshot(
        docRef,
        (doc) => {
          if (doc.exists()) {
            resolve(doc.data());
          } else {
            resolve(null);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  } else {
    const data: any = [];
    const querySnapshot = await getDocs(collection(db, dataCollection));
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  }
};

export const getTrimmedLowerCase = (text: string) => text.trim().toLowerCase();

export const formItemsInitialProperties = {
  title: "",
  description: "",
  category: "Psychology Tests",
  mainMedia: undefined,
  mainMediaUrl: "",
  questions: [
    {
      questionTitle: "",
      questionMedia: undefined,
      questionMediaUrl: "",
      options: [{ answer: "", for: "" }],
    },
  ],
  results: [
    {
      resultTitle: "",
      resultDescription: "",
      resultMedia: undefined,
      resultMediaUrl: "",
    },
  ],
};

export const tabIndexStoreInitialProperties = {
  questionTabIndex: 0,
  questionOptionTabIndex: 0,
  resultTabIndex: 0,
  generalTabIndex: 0,
};

export const isValueInData = (data: any[], itemName: string, name: string) => {
  if (!data) return false;
  return Object.values(data).some(
    (item) => generateFolderName(item[itemName]) === generateFolderName(name)
  );
};

export const profileItemsWithId = (
  dataArray: any[],
  filterKey: string,
  filterValue: string
) => {
  return dataArray
    .flatMap((item) =>
      Object.entries(item).map(([id, data]) => ({
        id,
        ...data,
      }))
    )
    .filter((item) => item[filterKey] === filterValue);
};

export const handleSearchFunction = (
  e: MouseEvent<HTMLButtonElement>,
  data: IFormItems[],
  searchValue: string,
  setItems: Dispatch<SetStateAction<IFormItems[]>>
) => {
  e.preventDefault();
  const items =
    data &&
    data.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
  setItems(items);
};

export const fetcher = (
  ...args: [input: RequestInfo, init?: RequestInit | undefined]
) => fetch(...args).then((res) => res.json());