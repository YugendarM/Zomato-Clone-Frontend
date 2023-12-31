import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: 'Home',
    address:'India'
  },
  {
    name: 'Office',
    address:'India'
  },
  {
    name: 'Gym',
    address:'India'
  },
]

export default function MyRadioGroup() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <div className="w-full px-4 py-4">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-zomato-btnpink'
                      : ''
                  }
                  ${
                    checked ? 'bg-zomato-btnpink bg-opacity-80 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-md">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            <p className='font-bold'>{plan.name}</p>
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              <address>{plan.address}</address>
                            </span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fbcfe8" opacity="0.6" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
