import { generalTabs, handleSubmit, updateTabIndex } from "@/helpers/helpers";
import Tab from "../Tab/Tab";
import ManageProperties from "../ManageProperties/ManageProperties";
import ManageQuestions from "../ManageQuestions/ManageQuestions";
import ManageResults from "../ManageResults/ManageResults";
import Button from "../Button/Button";
import RequestFailedMessage from "../RequestFailedMessage/RequestFailedMessage";
import { IAddTest } from "./AddTest.types";

function AddTest({
  tabIndexStore,
  setTabIndexStore,
  formItems,
  setFormItems,
  setModalProps,
}: IAddTest) {
  return (
    <form className="px-2">
      <Tab
        items={generalTabs}
        handleFunction={updateTabIndex}
        currentIndex={tabIndexStore.generalTabIndex || 0}
        itemName="generalTabIndex"
        setTabIndexStore={setTabIndexStore}
      />
      {tabIndexStore.generalTabIndex === 0 ? (
        <ManageProperties formItems={formItems} setFormItems={setFormItems} />
      ) : tabIndexStore.generalTabIndex === 1 ? (
        <ManageQuestions
          formItems={formItems}
          setFormItems={setFormItems}
          setTabIndexStore={setTabIndexStore}
          questionTabIndex={tabIndexStore.questionTabIndex || 0}
          questionOptionTabIndex={tabIndexStore.questionOptionTabIndex || 0}
        />
      ) : (
        <ManageResults
          results={formItems.results}
          resultTabIndex={tabIndexStore.resultTabIndex || 0}
          formItems={formItems}
          setFormItems={setFormItems}
          setTabIndexStore={setTabIndexStore}
        />
      )}
      <br />
      <br />
      <Button
        type="button"
        isButtonSecondary={false}
        name="Submit"
        handleFunction={(e) =>
          handleSubmit(
            e,
            formItems,
            setFormItems,
            setTabIndexStore,
            setModalProps,
            <RequestFailedMessage />
          )
        }
      />
    </form>
  );
}

export default AddTest;
