package org.fundacionjala.contacts.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.fundacionjala.contacts.db.entities.ContactData;

import java.util.HashSet;
import java.util.Objects;

@AllArgsConstructor
@Getter
@Setter
public class Contact {

    private Long id;
    private Long userId;
    private String name;
    private String email;
    private String phone;

    public Contact() { }

    public Contact(String name, String email, String phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Contact contact = (Contact) o;
        return id.equals(contact.id) && userId.equals(contact.userId) && name.equals(contact.name) && email.equals(contact.email) && phone.equals(contact.phone);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, name, email, phone);
    }

    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", userId=" + userId +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }

    public ContactData toEntity() {
        return new ContactData(id, 1L, name, email, phone, new HashSet<>());
    }
}
