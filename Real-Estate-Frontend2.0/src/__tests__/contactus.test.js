import React from "react";
import { shallow } from "enzyme";
import ContactUs from "../components/layout/ContactUs";

it("renders a firstname input", () => {
  expect(
    shallow(<ContactUs location={{ state: { subject: "Colombo" } }} />).find(
      "#firstname"
    ).length
  ).toEqual(1);
});

it("renders a message input", () => {
  expect(
    shallow(<ContactUs location={{ state: { subject: "Colombo" } }} />).find(
      "#message"
    ).length
  ).toEqual(1);
});

describe("Email input", () => {
  it("should respond to change event and change the state of the ContactUs Component", () => {
    const wrapper = shallow(
      <ContactUs location={{ state: { subject: "Colombo" } }} />
    );
    wrapper.find("#email").simulate("change", {
      target: {
        name: "email",
        value: "test@gmail.com",
      },
    });
    wrapper.update();
    expect(wrapper.state("email")).toEqual("test@gmail.com");
  });
});

describe("Message input", () => {
  it("should respond to change event and change the state of the ContactUs Component", () => {
    const wrapper = shallow(
      <ContactUs location={{ state: { subject: "Colombo" } }} />
    );
    wrapper.find("#message").simulate("change", {
      target: {
        name: "message",
        value: "msg",
      },
    });
    expect(wrapper.state("message")).toEqual("msg");
  });
});
