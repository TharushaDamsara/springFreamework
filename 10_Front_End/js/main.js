const baseUrl = "http://localhost:8080/app/v1/job";
let currentPage = 0;
const pageSize = 5;

$(document).ready(function () {
    loadJobs(currentPage);

    // Search
    $("#searchInput").on("keyup", function () {
        const keyword = $(this).val().trim();
        if (keyword === "") {
            loadJobs(0);
        } else {
            $.get(`${baseUrl}/search2/${keyword}`, function (res) {
                populateTable(res.data);
                $("#paginationControls").empty();
            });
        }
    });

    // Add Job
    $("#saveJobBtn").click(function () {
        const job = {
            jobName: $("#jobTitle").val(),
            jobRole: $("#companyName").val(),
            jobStatus: "Active"
        };

        $.ajax({
            url: `${baseUrl}/create`,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(job),
            success: function () {
                alert("Job added successfully");
                $("#addJobForm")[0].reset();
                loadJobs(currentPage);
            },
            error: function () {
                alert("Failed to add job");
            }
        });
    });

    // Update Job
    $("#updateJobBtn").click(function () {
        const jobId = $("#editJobId").val();
        const updatedJob = {
            jobName: $("#editJobTitle").val(),
            jobRole: $("#editCompanyName").val(),
            jobStatus: "Active"
        };

        $.ajax({
            url: `${baseUrl}/${jobId}`,
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(updatedJob),
            success: function () {
                alert("Job updated");
                loadJobs(currentPage);
            },
            error: function () {
                alert("Update failed");
            }
        });
    });

    // Action buttons (delegate)
    $("#jobsTableBody").on("click", ".delete-btn", function () {
        const id = $(this).data("id");
        if (confirm("Are you sure you want to delete this job?")) {
            $.ajax({
                url: `${baseUrl}/${id}`,
                method: "DELETE",
                success: function () {
                    alert("Deleted");
                    loadJobs(currentPage);
                },
                error: function () {
                    alert("Delete failed");
                }
            });
        }
    });

    $("#jobsTableBody").on("click", ".toggle-status-btn", function () {
        const id = $(this).data("id");
        $.ajax({
            url: `${baseUrl}/status/${id}`,
            method: "PATCH",
            success: function () {
                alert("Status changed");
                loadJobs(currentPage);
            },
            error: function () {
                alert("Status update failed");
            }
        });
    });

    // Pagination click
    $("#paginationControls").on("click", ".page-link", function (e) {
        e.preventDefault();
        const page = parseInt($(this).data("page"));
        currentPage = page;
        loadJobs(page);
    });
});

function loadJobs(page) {
    $.get(`${baseUrl}?page=${page}&size=${pageSize}`, function (res) {
        const pageData = res.data;
        populateTable(pageData.content);
        renderPagination(pageData.totalPages, pageData.number);
    }).fail(function () {
        alert("Failed to load jobs. Check backend and CORS.");
    });
}

function populateTable(jobs) {
    const tbody = $("#jobsTableBody");
    tbody.empty();

    if (!jobs || jobs.length === 0) {
        tbody.append(`<tr><td colspan="7" class="text-center">No jobs found</td></tr>`);
        return;
    }

    jobs.forEach((job, i) => {
        const statusBtnClass = job.jobStatus === "Active" ? "btn-warning" : "btn-success";
        const statusBtnText = job.jobStatus === "Active" ? "Deactivate" : "Activate";

        tbody.append(`
            <tr>
                <td>${(currentPage * pageSize) + i + 1}</td>
                <td>${job.jobName}</td>
                <td>${job.jobRole}</td>
                <td>—</td>
                <td>—</td>
                <td>${job.jobStatus}</td>
                <td>
                    <button class="btn btn-sm ${statusBtnClass} toggle-status-btn" data-id="${job.jobId}">${statusBtnText}</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id="${job.jobId}">Delete</button>
                </td>
            </tr>
        `);
    });
}

function renderPagination(totalPages, current) {
    const pagination = $("#paginationControls");
    pagination.empty();

    for (let i = 0; i < totalPages; i++) {
        pagination.append(`
            <li class="page-item ${i === current ? "active" : ""}">
                <a class="page-link" href="#" data-page="${i}">${i + 1}</a>
            </li>
        `);
    }
}
