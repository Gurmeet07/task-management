"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css" // Default styles

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <div className="p-4">
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      components={{
        Button: (props: React.ButtonHTMLAttributes<HTMLButtonElement> & { 'data-is-next'?: string }) => {
          const isNext = props['data-is-next'] === 'true'
          return (
            <button {...props}>
              {isNext ? (
                <ChevronRightIcon className="rotate-180"/>
              ) : (
                <ChevronLeftIcon />
              )}
            </button>
          )
        },
      }}
      {...props}
    />
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }