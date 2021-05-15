import { validateRegistration, existingUsers } from "utils/registration.utils";

test("should register user with valid name, password and confirmed password", () => {
  const registrationValidationResult = validateRegistration(
    "Armando",
    "password",
    "password"
  );
  expect(registrationValidationResult).toBe(true);
});

test("should not register user with empty name", () => {
  const registrationValidationResult = validateRegistration(
    "",
    "password",
    "password"
  );
  expect(registrationValidationResult).not.toBe(true);
});

test("should not register user with empty password", () => {
  const registrationValidationResult = validateRegistration("Armando", "", "");
  expect(registrationValidationResult).not.toBe(true);
});

test("should not register user with mismatched password", () => {
  const registrationValidationResult = validateRegistration(
    "Armando",
    "password",
    "different passowrd"
  );
  expect(registrationValidationResult).not.toBe(true);
});

test("should not register user whose username is already existing", () => {
  const registrationValidationResult = validateRegistration(
    existingUsers[0],
    "password",
    "password"
  );
  expect(registrationValidationResult).not.toBe(true);
});

test("should not register user whose password contains less than 2 characters", () => {
  const registrationValidationResult = validateRegistration(
    "Armando",
    "p",
    "p"
  );
  expect(registrationValidationResult).not.toBe(true);
});
