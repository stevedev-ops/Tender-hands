import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2"; // Assuming you're using a library for the bar chart

const Home = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const charityApplications = useSelector(
    (state) => state.charity.charityApplications
  );
  const approvedCharities = useSelector((state) => state.charity.charities); // Access approved charities from Redux store

  // State to manage the visibility of the dropdown and FAQ answers
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null); // State to track which FAQ is clicked

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Toggle FAQ answer visibility
  const toggleFAQAnswer = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index); // Toggle between showing and hiding the answer
  };

  // Donation data for the Bar chart (assuming you're using Chart.js or similar library)
  const donationData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Donations",
        data: [5000, 10000, 15000, 20000, 25000], // Example data
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const donationOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const containerStyle = {
    backgroundColor: "#f4f8fb",
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage: 'url("https://source.unsplash.com/1600x900/?donate")', // Adding a background image for impact
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const contentStyle = {
    backgroundColor: "#f4f8fb",
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage: 'url("https://source.unsplash.com/1600x900/?donate")', // Adding a background image for impact
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const mainTitleStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2c3e50",
    textShadow: "2px 2px 4px rgba(0,0,0,0.2)", // Add a subtle text shadow for better readability
  };

  const descriptionStyle = {
    fontSize: "1.4rem",
    color: "#34495e",
    marginBottom: "20px",
    lineHeight: "1.8",
    fontStyle: "italic",
  };

  const buttonStyle = {
    backgroundColor: "#127BF3",
    color: "white",
    fontSize: "1.1rem",
    padding: "12px 25px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    marginTop: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const buttonHoverStyle = {
    backgroundColor: "#c0392b",
    transform: "scale(1.05)", // Button scales up slightly on hover
  };

  const encouragingMessageStyle = {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#27ae60", // Green for a positive, encouraging message
    marginTop: "20px",
  };

  // Render content for donor
  const renderDonorContent = () => {
    return (
      <div style={contentStyle}>
        <h1 style={mainTitleStyle}>Welcome, Donor!</h1>
        <p style={descriptionStyle}>Your generosity brings hope to others.</p>

        <h2 style={mainTitleStyle}>Donation Process Overview</h2>
        <p>1. Select Donation Amount</p>
        <p>2. Choose Payment Method</p>
        <p>3. Confirm Donation</p>

        {/* List of Charities to Donate To */}
        <h2 style={mainTitleStyle}>Choose a Charity to Support</h2>
        {approvedCharities && approvedCharities.length > 0 ? (
          <div>
            {approvedCharities.map((charity) => (
              <div key={charity.id} style={{ marginBottom: "20px" }}>
                <h3>{charity.name}</h3>
                <p>{charity.description}</p>
                <Link to={`/donate/${charity.id}`}>
                  <button
                    style={buttonStyle}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor =
                        buttonHoverStyle.backgroundColor)
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor =
                        buttonStyle.backgroundColor)
                    }
                  >
                    Donate Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No approved charities available at the moment.</p>
        )}

        <h2 style={mainTitleStyle}>Step-by-step Account Setup guidance</h2>
        <p>1. Create an Account</p>
        <p>2. Discover our available services</p>
        <p>3. Choose a cause to support</p>

        <h2 style={mainTitleStyle}>Donation Statistics</h2>
        <p>Total Donated: KSh100,000</p>

        {/* Bar chart showing donation growth */}
        <Bar data={donationData} options={donationOptions} />

        <p>95% Success Rate</p>
        <p>Growth: +5% since last month, +15% YoY</p>

        {/* Link to the donation history page */}
        <Link to="/donation-history">
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Donation History
          </button>
        </Link>
      </div>
    );
  };
  // Render content for admin
  const renderAdminSection = () => (
    <div style={adminSectionStyle}>
      <h2 style={{ fontSize: "2rem", color: "#34495e" }}>Admin Dashboard</h2>

      <div style={dataMetricCardStyle}>
        {/* Total Applications */}
        <div style={dataMetricCardStyle}>
          <h3>Total Applications</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {/* {totalApplications} */}
            0
          </p>
        </div>

        {/* Approval Rate */}
        <div style={dataMetricCardStyle}>
          <h3>Approval Rate</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {/* {approvalRate}% */}
            0
          </p>
        </div>

        {/* Submitted Charities Section */}
        <div style={dataMetricCardStyle}>
          <h3>Submitted Charities</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {charityApplications.filter((c) => c.status === "pending").length}
          </p>
        </div>
      </div>

      <div style={dataMetricCardStyle}>
        {/* Approved Charities Section */}
        <div style={dataMetricCardStyle}>
          <h3>Approved Charities</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {/* {charities.length} */}
            0
          </p>
        </div>

        {/* Charities Under Review Section */}
        <div style={dataMetricCardStyle}>
          <h3>Charities Under Review</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {
              charityApplications.filter((c) => c.status === "under review")
                .length
            }
          </p>
        </div>
      </div>

      <div style={achievementContainerStyle}>
        {/* Achievement 1 */}
        <div style={achievementItemStyle}>
          <div style={frameStyle} />
          <div style={titleStyle}>Served 10,000 people</div>
          <div style={subtitleStyle}>Impactful Contributions</div>
        </div>

        {/* Achievement 2 */}
        <div style={achievementItemStyle}>
          <div style={frameStyle} />
          <div style={titleStyle}>Funding Documents</div>
          <div style={subtitleStyle}>Transparency</div>
        </div>

        {/* Achievement 3 */}
        <div style={achievementItemStyle}>
          <div style={frameStyle} />
          <div style={titleStyle}>View Documents</div>
          <div style={subtitleStyle}>Access Anytime</div>
        </div>
      </div>

      {/* Charity Applications Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "1220px",
          padding: "30px 60px",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <h3>Pending Charity Applications</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {charityApplications
            .filter((app) => app.status === "pending")
            .map((app, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "8px",
                }}
              >
                <span>{app.name}</span>
                <div>
                  <button style={{ ...buttonStyleAdmin, marginRight: "10px" }}>
                    View
                  </button>
                  <button
                    style={{
                      ...buttonStyleAdmin,
                      backgroundColor: "#f39c12",
                      marginRight: "10px",
                    }}
                  >
                    Approve
                  </button>
                  <button
                    style={{ ...buttonStyleAdmin, backgroundColor: "#e74c3c" }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div style={dataMetricCardStyle}>
        <h3>Admin Actions</h3>
        <div>
          <textarea
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "0.9rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
            placeholder="Enter notes here."
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button style={buttonStyleAdmin}>Approve</button>
          <button style={buttonStyleAdmin}>Reject</button>
        </div>
      </div>
      <button style={buttonStyle}>Request Feedback</button>
    </div>
  );

  // Render content based on role
  const renderHomeContent = () => {
    if (!isAuthenticated) {
      return (
        <div style={contentStyle}>
         <h1 style={mainTitleStyle}>Welcome to Our Donation Platform</h1>

<img 
  src="https://cdn.pixabay.com/photo/2018/10/24/19/58/babys-hand-3771123_960_720.jpg" 
  alt="Baby's hand" 
  style={imageStyle}
/>

<p style={descriptionStyle}>Your contributions can change lives!</p>

          <p style={descriptionStyle}>
            Join our community and make a lasting impact.
          </p>

          <div
            style={{
              sectionStyle,
              textAlign: "center",
              marginTop: "40px",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#f0f4f8",
              position: 'relative', 
              marginRight: "auto",  // Moves the container to the right
            top: '-00px',  // Moves the container up (adjust as needed)
            width: '30%',  // Makes the container smaller
            backgroundSize: "cover",
            }}
          >
            <h2 style={{ color: "#2c3e50", fontWeight: "bold" }}>
              Flexible Donation Options
            </h2>
            <p>Choose any amount that suits your budget.</p>
            <Link to="/learn-more">
              <button
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                Learn More
              </button>
            </Link>
          </div>

          <div
            style={{
              sectionStyle,
              display: "flex",        // Parent container should be a flex container
    flexDirection: "column", // Stack items vertically
    justifyContent: "flex-start", // Align children at the top
    alignItems: "center",    
              textAlign: "center",
              marginTop: "40px",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#f0f4f8",
              position: 'relative', 
              margincentre: "auto",  // Moves the container to the right
            top: '-250px',  // Moves the container up (adjust as needed)
            width: '25%',  // Makes the container smaller
            
            }}
          >
            <h2 style={{ color: "#2c3e50", fontWeight: "bold" }}>
              Transparent Donation Tracking
            </h2>
            <p>See exactly where your contributions go.</p>
            <Link to="/explore">
              <button
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                Explore
              </button>
            </Link>
          </div>
          <div
            style={{
              sectionStyle,
              
              textAlign: "center",
              marginTop: "40px",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#f0f4f8",
              position: 'relative', 
              marginLeft: "auto",  // Moves the container to the right
            top: '-530px',  // Moves the container up (adjust as needed)
            width: '30%',  // Makes the container smaller
            }}
          >
            <h2 style={{ color: "#2c3e50", fontWeight: "bold" }}>
              Effortless Setup for Donations
            </h2>
            <p>Easily create your donation plan in just a few clicks.</p>
            <Link to="/signup">
              <button
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                Start
              </button>
            </Link>
          </div>

          <div
           style={{
            sectionStyle,
            
            textAlign: "center",
            marginTop: "40px",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "#f0f4f8",
            position: 'relative', 
            marginLeft: "auto",  // Moves the container to the right
          top: '-530px',  // Moves the container up (adjust as needed)
          width: '40%',  // Makes the container smaller
          }}
          >
            <h2 style={{ color: "#2c3e50", fontWeight: "bold" }}>Impact</h2>
            <p>
              Join Our Giving Community. Together, we can make a difference.
            </p>
            {/* Add a picture to the Impact section */}
            <img
              src="https://media.istockphoto.com/id/1963122557/photo/teamwork.jpg?s=2048x2048&w=is&k=20&c=dhkmCA7Yan09xOZm1UOZaJIYK9NV4f0q9KtRbzjz8Uc=" // Replace with your image URL
              alt="Impact"
              style={{
                width: "100%", // Adjust as needed
                maxWidth: "300px", // Optional: you can limit the width
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            />
            
          </div>

        

          <div
            style={{
              sectionStyle,
              textAlign: "center",
              
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#f0f4f8",
              position: 'relative', 
              marginRight: "auto",  // Moves the container to the right
            top: '-900px',  // Moves the container up (adjust as needed)
            width: '40%',  // Makes the container smaller
            
            }}
          >
            <h2 style={{ color: "#2c3e50", fontWeight: "bold" }}>Support</h2>
            <p>
              Your contributions matter. Every donation helps us achieve our
              mission.
            </p>
            {/* Add a picture to the Support section */}
            <img
              src="https://cdn.pixabay.com/photo/2014/09/20/04/04/buddhists-453317_960_720.jpg" // Replace with your image URL
              alt="Support"
              style={{
                width: "100%", // Ensure the image takes full width of its container
                maxWidth: "300px", // Optional: limits the width of the image
                marginBottom: "20px", // Adds space below the image
                borderRadius: "10px",
                display: "block", // Ensures the image is a block-level element and stacks vertically
                marginLeft: "auto", // Centers the image horizontally
                marginRight: "auto",
              }}
            />
            <Link to="/donate">
              <button
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                Donate
              </button>
            </Link>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "-850px",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#f0f4f8",
            }}
          >
            <h2 style={{ color: "#2c3e50", fontWeight: "bold" }}>Impact</h2>
            <p>
              Every donation makes a difference. Together, we have raised over
              $1 million to support vital programs. Join us in creating lasting
              change in our communities.
            </p>
            <h3 style={{ color: "#2c3e50" }}>
              Transforming Lives Through Your Generosity
            </h3>

            {/* Donation Statistics */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <div style={{ marginRight: "30px" }}>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>75%</p>
                <p>Funds Directly Impact</p>
              </div>
              <div style={{ marginRight: "30px" }}>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>50%</p>
                <p>Recurring Donors Increase</p>
              </div>
              <div>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>90%</p>
                <p>Projects Funded Successfully</p>
              </div>
            </div>

            {/* Donation buttons */}
            <div>
              <Link to="/donate">
                <button
                  style={buttonStyle}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      buttonHoverStyle.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      buttonStyle.backgroundColor)
                  }
                >
                  Donate
                </button>
              </Link>
              <Link to="/about">
                <button
                  style={buttonStyle}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      buttonHoverStyle.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      buttonStyle.backgroundColor)
                  }
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>

         
          {/* FAQ Section */}
          <div style={sectionStyle}>
            <h2 style={{ color: "#2980b9", fontWeight: "bold" }}>
              Frequently Asked Questions
            </h2>

            <div style={faqQuestionStyle} onClick={() => toggleFAQAnswer(0)}>
              ❓ <strong>How do I donate?</strong>
            </div>
            {activeFAQ === 0 && (
              <div style={faqAnswerStyle}>
                Donating is simple! Just visit our donation page, select your
                preferred amount, and choose whether to make it a one-time or
                recurring donation. Follow the prompts to complete your donation
                securely.
              </div>
            )}

            <div style={faqQuestionStyle} onClick={() => toggleFAQAnswer(1)}>
              ❓ <strong>What are recurring donations?</strong>
            </div>
            {activeFAQ === 1 && (
              <div style={faqAnswerStyle}>
                Recurring donations allow you to contribute automatically at
                regular intervals, such as monthly or quarterly. This ensures
                your support continues without needing to remember to donate
                each time. It's an easy way to make a lasting impact!
              </div>
            )}

            <div style={faqQuestionStyle} onClick={() => toggleFAQAnswer(2)}>
              ❓ <strong>Can I change my donation?</strong>
            </div>
            {activeFAQ === 2 && (
              <div style={faqAnswerStyle}>
                Absolutely! You can modify your donation amount or frequency at
                any time through your account settings. If you need assistance,
                our support team is here to help you with the process.
              </div>
            )}

            <div style={faqQuestionStyle} onClick={() => toggleFAQAnswer(3)}>
              ❓ <strong>Is my donation secure?</strong>
            </div>
            {activeFAQ === 3 && (
              <div style={faqAnswerStyle}>
                Yes, we prioritize your security. Our donation platform uses
                industry-standard encryption to protect your personal and
                financial information. You can donate with confidence knowing
                that your data is safe.
              </div>
            )}

            <div style={faqQuestionStyle} onClick={() => toggleFAQAnswer(4)}>
              ❓ <strong>What impact does my donation have?</strong>
            </div>
            {activeFAQ === 4 && (
              <div style={faqAnswerStyle}>
                Your donation directly supports our programs and initiatives,
                helping us achieve our mission. Every contribution, big or
                small, makes a difference in the lives of those we serve.
                Together, we can create lasting change!
              </div>
            )}
          </div>

          {/* Dropdown button */}
          <div style={{
          backgroundColor: "clear",
          color: "clear" 
        }}
      >
           

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div style={dropdownMenuStyle}>
                <Link to="/signup">
                  <button
                    style={dropdownButtonStyle}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor =
                        buttonHoverStyle.backgroundColor)
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor =
                        buttonStyle.backgroundColor)
                    }
                  >
                    Log In as Charity
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    style={dropdownButtonStyle}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor =
                        buttonHoverStyle.backgroundColor)
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor =
                        buttonStyle.backgroundColor)
                    }
                  >
                    Log In as Donor
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      );
    }

    switch (role) {
      case "donor":
        return renderDonorContent();
      case "charity":
        return (
          <div style={contentStyle}>
            <h1 style={mainTitleStyle}>Welcome to our Charities Page</h1>
            <p style={descriptionStyle}>
              Explore and support various charitable causes.
            </p>

            <h2
              style={{ ...mainTitleStyle, fontSize: "2rem", marginTop: "40px" }}
            >
              Featured Charities
            </h2>
            <p style={descriptionStyle}>
              Browse through our approved charities:
            </p>

            {/* Dynamically render approved charities */}
            {approvedCharities && approvedCharities.length > 0 ? (
              approvedCharities.map((charity) => (
                <div key={charity.id} style={{ marginBottom: "30px" }}>
                  <h3>{charity.name}</h3>
                  <p>{charity.description}</p>
                </div>
              ))
            ) : (
              <p>No approved charities available at the moment.</p>
            )}

            <h2
              style={{ ...mainTitleStyle, fontSize: "2rem", marginTop: "40px" }}
            >
              FAQ (Frequently Asked Questions)
            </h2>
            <div style={descriptionStyle}>
              <div onClick={() => toggleFAQAnswer(0)} style={faqQuestionStyle}>
                ❓ <strong>How are charities vetted?</strong>
              </div>
              {activeFAQ === 0 && (
                <div style={faqAnswerStyle}>
                  Charities go through a comprehensive review process where they
                  are evaluated based on several criteria, such as their
                  mission, impact, financial health, and transparency. This
                  ensures that donations are going to reputable organizations.
                </div>
              )}

              <div onClick={() => toggleFAQAnswer(1)} style={faqQuestionStyle}>
                ❔ <strong>Can I suggest a charity for approval?</strong>
              </div>
              {activeFAQ === 1 && (
                <div style={faqAnswerStyle}>
                  Yes, you can suggest a charity for approval. There is usually
                  a form or contact option on the platform where you can provide
                  details about the charity you want to recommend.
                </div>
              )}

              <div onClick={() => toggleFAQAnswer(2)} style={faqQuestionStyle}>
                ❓{" "}
                <strong>
                  What happens if a charity doesn't meet the criteria?
                </strong>
              </div>
              {activeFAQ === 2 && (
                <div style={faqAnswerStyle}>
                  If a charity doesn't meet the criteria, it might be rejected
                  during the review process. The platform will typically inform
                  the charity of the reasons for rejection and may offer
                  guidance on areas they need to improve to meet the necessary
                  standards.
                </div>
              )}
            </div>
            <p style={encouragingMessageStyle}>
              Together, we can change the world, one charity at a time!
            </p>
            <Link to="/charity-application">
              <button
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                Apply Now
              </button>
            </Link>
          </div>
        );
      case "admin":
        return renderAdminSection(); // Show the admin-specific content
      default:
        return (
          <div style={contentStyle}>
            <h1 style={mainTitleStyle}>Welcome to Our Donation Platform</h1>
            <p style={descriptionStyle}>
              Contribute today, whether you're donating or opening a charity.
            </p>
            <p style={encouragingMessageStyle}>
              Together, we can create a ripple effect of kindness!
            </p>
            <Link to="/explore">
              <button
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                Explore Now
              </button>
            </Link>
          </div>
        );
    }
  };

  return (
    <div style={containerStyle}>
      {renderHomeContent()}
      {/* Footer with Terms of Service and Privacy Policy links */}
      <footer
        style={{
          padding: "20px 0",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          width: "100%",     // Ensures the footer spans the entire width
          height: "10vh",    // Ensures the footer takes up the full height of the screen
          position: "bottom", // Keeps it fixed at the bottom if necessary
          bottom: 0, 
        }}
      >
        <div>
          <Link
            to="/terms"
            style={{
              margin: "0 15px",
              color: "#ecf0f1",
              textDecoration: "none",
            }}
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            style={{
              margin: "0 15px",
              color: "#ecf0f1",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </Link>
        </div>
        <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
          © 2024 Tender Hands. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// FAQ question style
const faqQuestionStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#2980b9",
  cursor: "pointer",
  marginBottom: "10px",
};
const imageStyle = {
  display: 'block',
  margin: '0 auto',  // Center the image
  width: '80%',      // Adjust the width as needed
  borderRadius: '10px', // Optional: add rounded corners
  marginBottom: '20px', // Space between image and the description
};

const adminSectionStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px",
  gap: "40px",
  width: "1220px",
  height: "880px",
  backgroundColor: "#f7f7f7",
  borderRadius: "10px",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  marginTop: "40px",
};

const sectionStyle = {
  textAlign: "left",
  marginTop: "60px",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#f0f4f8",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};
const dataMetricCardStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  fontSize: "1rem",
  color: "#2c3e50",
};

// FAQ answer style
const faqAnswerStyle = {
  fontSize: "1.1rem",
  color: "#34495e",
  marginBottom: "20px",
  paddingLeft: "20px",
};
//
 const achievementContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "100px",
};//


const achievementItemStyle = {
  
};


const frameStyle = {
  
};


const titleStyle = {
 
};


const subtitleStyle = {
  
};


const buttonStyleAdmin  = {

};


export default Home;
