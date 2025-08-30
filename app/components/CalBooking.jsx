"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";

const CalBooking = ({
  namespace = "primeghar",
  calLink,
  calConfig = '{"layout":"month_view"}',
  children,
  className = "",
  hideEventTypeDetails = false,
  layout = "month_view",
}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        hideEventTypeDetails,
        layout,
      });
    })();
  }, [namespace, hideEventTypeDetails, layout]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      data-cal-namespace={namespace}
      data-cal-link={calLink}
      data-cal-config={calConfig}
    >
      {children}
    </motion.button>
  );
};

export default CalBooking;
