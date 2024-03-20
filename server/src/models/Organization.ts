export default class Organization {
  organizationId: number;
  formalName: string;
  displayName: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  phoneNumber: string;
  email: string;
  websiteLink: string;
  photo: Blob;

  constructor(
    organizationId: number,
    formalName: string,
    displayName: string,
    country: string,
    city: string,
    postalCode: string,
    streetAddress: string,
    phoneNumber: string,
    email: string,
    websiteLink: string,
    photo: Blob
  ) {
    this.organizationId = organizationId;
    this.formalName = formalName;
    this.displayName = displayName;
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.streetAddress = streetAddress;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.websiteLink = websiteLink;
    this.photo = photo;
  }
}
