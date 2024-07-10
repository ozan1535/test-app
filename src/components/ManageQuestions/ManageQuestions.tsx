import {
  addNewTab,
  handleFieldChange,
  handleMediaChange,
  handleOptionsChange,
  updateTabIndex,
} from "@/helpers/helpers";
import Input from "../Input/Input";
import InputMedia from "../InputMedia/InputMedia";
import Tab from "../Tab/Tab";
import Button from "../Button/Button";
import { IManageQuestions } from "./ManageQuestions.types";
import Select from "../Select/Select";

export default function ManageQuestions({
  formItems,
  setFormItems,
  setTabIndexStore,
  questionTabIndex,
  questionOptionTabIndex,
}: IManageQuestions) {
  return (
    <>
      <Tab
        items={formItems.questions}
        handleFunction={updateTabIndex}
        setTabIndexStore={setTabIndexStore}
        currentIndex={questionTabIndex}
        itemName="questionTabIndex"
        title="Question"
      />
      <Input
        name="questionTitle"
        type="text"
        handleFunction={(e) =>
          handleFieldChange(
            e,
            questionTabIndex,
            formItems,
            setFormItems,
            "questions"
          )
        }
        value={formItems.questions[questionTabIndex].questionTitle}
      />
      <InputMedia
        media={formItems.questions[questionTabIndex].questionMedia}
        handleMediaChange={(e) =>
          handleMediaChange(e, "question", setFormItems, questionTabIndex)
        }
      />
      <h1>Question Options</h1>
      <Tab
        items={formItems.questions[questionTabIndex].options}
        handleFunction={updateTabIndex}
        currentIndex={questionOptionTabIndex}
        setTabIndexStore={setTabIndexStore}
        itemName="questionOptionTabIndex"
        title="Option"
      />
      <Input
        name="answer"
        type="text"
        handleFunction={(e) =>
          handleOptionsChange(
            e,
            questionTabIndex,
            questionOptionTabIndex,
            formItems,
            setFormItems
          )
        }
        value={
          formItems.questions[questionTabIndex].options[questionOptionTabIndex]
            .answer
        }
      />
      <Select
        name="for"
        handleFunction={(e) =>
          handleOptionsChange(
            e,
            questionTabIndex,
            questionOptionTabIndex,
            formItems,
            setFormItems
          )
        }
        value={
          formItems.questions[questionTabIndex].options[questionOptionTabIndex]
            .for
        }
        options={formItems.results}
        optionKey="resultTitle"
        isDisabled={formItems.results[0].resultTitle === ""}
      />
      <span className="font-thin text-xs text-orange-600">
        * Please add results in order to see options
      </span>
      <br />
      <Button
        type="button"
        isButtonSecondary={true}
        name="Add new option"
        handleFunction={() =>
          addNewTab("option", setFormItems, questionTabIndex)
        }
      />
      <br />
      <br />
      <Button
        type="button"
        isButtonSecondary={true}
        name="Add new question"
        handleFunction={() =>
          addNewTab("question", setFormItems, questionTabIndex)
        }
      />
      <hr />
    </>
  );
}
