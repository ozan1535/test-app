"use client";
import { useState } from "react";
import Button from "@/components/Button/Button";
import ManageProperties from "@/components/ManageProperties/ManageProperties";
import ManageQuestions from "@/components/ManageQuestions/ManageQuestions";
import ManageResults from "@/components/ManageResults/ManageResults";
import {
  formItemsInitialProperties,
  generalTabs,
  handleSubmit,
  tabIndexStoreInitialProperties,
  updateTabIndex,
} from "@/helpers/helpers";
import Tab from "@/components/Tab/Tab";
import { IFormItems, ITabIndexStore } from "../types";
import { useAppContext } from "../context";
import RequestFailedMessage from "@/components/RequestFailedMessage/RequestFailedMessage";

export default function Manage() {
  const { setModalProps } = useAppContext();
  const [formItems, setFormItems] = useState<IFormItems>(
    formItemsInitialProperties
  );

  const [tabIndexStore, setTabIndexStore] = useState<ITabIndexStore>(
    tabIndexStoreInitialProperties
  );

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
