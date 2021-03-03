import React from "react";
import { shallow } from "enzyme";
import Login from "../components/auth/Login";

it("renders a email input", () => {
  expect(
    shallow(
      <Login loginUser={() => {}} auth={new Object()} errors={new Object()} />
    ).find("#email").length
  ).toEqual(1);
});

it("renders a password input", () => {
  expect(
    shallow(
      <Login loginUser={() => {}} auth={new Object()} errors={new Object()} />
    ).find("#password").length
  ).toEqual(1);
});

describe("Email input", () => {
  it("should respond to change event and change the state of the Login Component", () => {
    const wrapper = shallow(
      <Login loginUser={() => {}} auth={new Object()} errors={new Object()} />
    );
    wrapper.find("#email").simulate("change", {
      target: {
        id: "email",
        value: "blah@gmail.com",
      },
    });
    wrapper.update();
    expect(wrapper.state("email")).toEqual("blah@gmail.com");
  });
});

describe("Password input", () => {
  it("should respond to change event and change the state of the Login Component", () => {
    const wrapper = shallow(
      <Login loginUser={() => {}} auth={new Object()} errors={new Object()} />
    );
    wrapper.find("#password").simulate("change", {
      target: {
        id: "password",
        value: "cats",
      },
    });
    expect(wrapper.state("password")).toEqual("cats");
  });
});
