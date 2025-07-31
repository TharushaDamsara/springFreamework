package edu.ijse.dto;

public class UserDto {
    private String uid;
    private String uname;
    private String uaddress;

    // Required: Getters & Setters
    public String getUid() {
        return uid;
    }
    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getUname() {
        return uname;
    }
    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getUaddress() {
        return uaddress;
    }
    public void setUaddress(String uaddress) {
        this.uaddress = uaddress;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "uid='" + uid + '\'' +
                ", uname='" + uname + '\'' +
                ", uaddress='" + uaddress + '\'' +
                '}';
    }
}
