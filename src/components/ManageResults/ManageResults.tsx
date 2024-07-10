import {
  addNewTab,
  handleFieldChange,
  handleMediaChange,
  updateTabIndex,
} from "@/helpers/helpers";
import Tab from "../Tab/Tab";
import InputMedia from "../InputMedia/InputMedia";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { IManageResults } from "./ManageResults.types";

export default function ManageResults({
  results,
  resultTabIndex,
  formItems,
  setFormItems,
  setTabIndexStore,
}: IManageResults) {
  return (
    <>
      <Tab
        items={results}
        handleFunction={updateTabIndex}
        currentIndex={resultTabIndex}
        itemName="resultTabIndex"
        setTabIndexStore={setTabIndexStore}
        title="Result"
      />
      <Input
        name="resultTitle"
        type="text"
        handleFunction={(e) =>
          handleFieldChange(
            e,
            resultTabIndex,
            formItems,
            setFormItems,
            "results"
          )
        }
        value={formItems.results[resultTabIndex].resultTitle}
      />
      <Input
        name="resultDescription"
        type="text"
        handleFunction={(e) =>
          handleFieldChange(
            e,
            resultTabIndex,
            formItems,
            setFormItems,
            "results"
          )
        }
        value={formItems.results[resultTabIndex].resultDescription}
      />
      <InputMedia
        media={results[resultTabIndex].resultMedia}
        handleMediaChange={(e) =>
          handleMediaChange(e, "result", setFormItems, resultTabIndex)
        }
      />
      <Button
        type="button"
        isButtonSecondary={true}
        name="Add new result"
        handleFunction={() => addNewTab("result", setFormItems, resultTabIndex)}
      />
    </>
  );
}
