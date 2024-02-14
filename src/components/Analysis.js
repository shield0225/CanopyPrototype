import React from "react";
//import "./RecommendationsPage.css"; // Ensure you have the CSS file for styling
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import analysis from "../assets/analysis.jpg";
import analysis2 from "../assets/analysis2.jpg";
import Footer from "./Footer";

const Analysis = () => {
  const location = useLocation();
  const { drawnCoords, soilType, species, shade, orientation } =
    location.state || {};

  // Sample tree data for urban planting recommendations
  const treeData = [
    {
      name: "Oak (Quercus)",
      description:
        "Oaks are robust trees that provide dense shade and support a wide range of wildlife. Ideal for parks and large green spaces. Oak trees are perfect for areas with loamy soil and where significant shade coverage is desired.",
      imageUrl:
        "https://cdn.britannica.com/82/196882-050-18789B3B/oak-tree-Quercus-robur-fall-foliage.jpg?w=400&h=300&c=crop", // Replace with your actual image URL
    },
    {
      name: "Maple (Acer)",
      description:
        "Maples offer vibrant fall colors and are adaptable to various urban conditions. Suitable for streetscapes and public gardens. They thrive in a range of soils, including clay, and can provide ample shade as per the desired ratio.",
      imageUrl:
        "https://media.istockphoto.com/id/1431046704/photo/autumnal-sugar-maple-tree-at-willow-river-state-park.jpg?s=612x612&w=0&k=20&c=aCWfReSvcevnmUFI_dqMj5eNe2LKU6MQXqR9VQ0Ub6I=", // Replace with your actual image URL
    },
    {
      name: "Honey Locust (Gleditsia triacanthos)",
      description:
        "This tree provides light, dappled shade and is tolerant to urban stress. Its small leaves reduce maintenance efforts, making it ideal for sandy soil areas and places requiring less dense shade.",
      imageUrl:
        "https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Honey-Locust-Trees-Glenditsia-triacanthos.jpg", // Replace with your actual image URL
    },
    // Add more trees as desired
  ];

  return (
    <Container>
      <div className="recommendations-container">
        <h2 className="title"> Tree Planting Recommendations: </h2>
        <img src={analysis} alt="analysis" width={500} />
        <img src={analysis2} alt="analysis2" width={500} />
        <p>
          Based on your selection, your area's land cover is mostly:{" "}
          <strong>{soilType}</strong>,
        </p>{" "}
        <p></p>
        <p>
          And you are aiming for <strong>{shade}% shade coverage</strong> with
          planting orientation from the <strong>{orientation}</strong>.{" "}
        </p>
        <p>
          The species you have chosen is: <strong>{species}</strong>.{" "}
        </p>
        <p>Here are some trees that fit your criteria:</p>
        <div className="trees-list">
          {treeData.map((tree, index) => (
            <div key={index} className="tree-recommendation">
              <img
                src={tree.imageUrl}
                alt={tree.name}
                className="tree-image"
                width={500}
              />
              <h4 className="text-medium">{tree.name}</h4>
              <p className="text-med">{tree.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Analysis;
