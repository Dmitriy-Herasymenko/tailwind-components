import * as React from "react";
import {useState} from "react";
import {Menu, Transition} from "@headlessui/react";
import {styles} from "./style";


export const DropDown = () => {
    const [option, setOption] = useState('options');

    const data = [
        {value: 'option1', id: '1'},
        {value: 'option2', id: '2'},
        {value: 'option3', id: '3'},
        {value: 'option4', id: '4'},
        {value: 'option5', id: '5'}
    ];
    const classes = styles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapperMenu}>
                <Menu>
                    {({open}) => (
                        <>
              <span className={classes.wrapperMenuBtn}>
                <Menu.Button
                    className={classes.menuBtn}>
                  <span>{option}</span>
                  <svg
                      className={classes.iconMenuBtn}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </span>

                            <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className={classes.meuItems}
                                >
                                    <div className={classes.wrapperMenuItem}>
                                        {data.map(item => {
                                            return (
                                                <Menu.Item key={item.id}>
                                                    {({active}) => {
                                                        return (
                                                        <span
                                                            onClick={() => setOption(item.value)}
                                                            className={`
                                                                ${active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700"} ${classes.menuItem}`}
                                                        >
                                                    {item.value}
                                                </span>)
                                                    }}
                                                </Menu.Item>
                                            )
                                        })}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        </div>
    );
}
