const schema = {
    type: "object",
    properties: {
      firstName: { type: "string", minLength: 2 },
      lastName: { type: "string", minLength: 2 },
      username: { type: "string", minLength: 2 },
      email: { type: "string", format: "email" },
      password: { type: "string" },
    },
    required: ["email", "password", "firstName", "lastName", "username"],
    additionalProperties: true,
  };
  
  module.exports = {
    signupSchema: schema,
  };