export const extractClerkPrimaryEmail = (
  email_addresses: Record<string, any>[],
  primary_email_address_id: string,
) => {
  const primaryEmailAddress = email_addresses.find(
    (email_address) => email_address.id === primary_email_address_id,
  );

  return primaryEmailAddress['email_address'];
};
