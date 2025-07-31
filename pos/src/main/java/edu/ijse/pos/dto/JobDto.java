package edu.ijse.pos.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class JobDto {
    private int id;

    @NotBlank(message = "Tittle is Mandatory")
    private String title;

    @NotBlank(message = "Company is Mandatory")
    private String company;

    private String location;
    private String type;

    @Size(min = 10,max = 100, message = "job desc should at least 10 characters")
    private String description;


}
