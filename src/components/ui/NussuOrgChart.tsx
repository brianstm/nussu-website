import React, { useState, useEffect, useRef } from "react";

interface OrgNode {
  name: string;
  role: string;
  cell?: string;
  children?: OrgNode[];
  x?: number;
  y?: number;
}

interface CellColors {
  [key: string]: string;
  Presidential: string;
  Internal: string;
  External: string;
  Secretariat: string;
  Financial: string;
  Communications: string;
  "Student Life": string;
  "Student Welfare": string;
  default: string;
}

const NussuOrgChart = () => {
  const [selectedCell, setSelectedCell] = useState("all");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define the hierarchical structure based on the NUSSU organization
  const orgData = {
    name: "Sean Pang Kai Xiong",
    role: "President",
    cell: "Presidential",
    children: [
      {
        name: "Yap Zuo Hang",
        role: "Executive Assistant to the President",
        cell: "Presidential",
      },
      {
        name: "Lee Yat Bun",
        role: "Senior Advisor to the President",
        cell: "Presidential",
      },
      {
        name: "Aaron Goh Wei Ming",
        role: "Research Executive",
        cell: "Presidential",
      },
      {
        name: "Loh Xin Yin",
        role: "Communications Secretary",
        cell: "Communications",
        children: [
          {
            name: "Bryan Castorius Halim",
            role: "Senior Advisor",
            cell: "Communications",
          },
          {
            name: "Muhammad Zuliman Bin Sanuse",
            role: "Deputy Communications Secretary",
            cell: "Communications",
          },
          {
            name: "Corey Siah Jia Rong",
            role: "Director of External Media Relations",
            cell: "Communications",
          },
          {
            name: "Tan Ginny",
            role: "Director of Internal Media Relations",
            cell: "Communications",
            children: [
              {
                name: "Tay Jing Yun",
                role: "Social Media Strategy Lead",
                cell: "Communications",
              },
              {
                name: "Ethan Teo Yu Cheng",
                role: "Content Strategy Lead",
                cell: "Communications",
              },
            ],
          },
          {
            name: "Angie Truong Hai Ha",
            role: "Director of Publications (Editor-in-Chief of The Ridge)",
            cell: "Communications",
          },
          {
            name: "Yap Bo Yu",
            role: "Director of Video and Photography",
            cell: "Communications",
          },
          {
            name: "Zehua Zhang & Gareth Yeo Wei Jun",
            role: "Tech Lead",
            cell: "Communications",
          },
          {
            name: "Gwyneth Guo Bai Ling",
            role: "Publications Platforms Lead",
            cell: "Communications",
          },
          {
            name: "Mavis Mook",
            role: "Press and Creative Writing Lead",
            cell: "Communications",
          },
          {
            name: "Nurain Syarafana",
            role: "Chief Designer",
            cell: "Communications",
          },
        ],
      },
      {
        name: "Wong Chermaine",
        role: "Vice-President (Internal)",
        cell: "Internal",
        children: [
          {
            name: "Darren Kuek Jia Ming",
            role: "Executive Assistant to the VP (Internal)",
            cell: "Internal",
          },
          {
            name: "Chee Wei En, Jiang Ruyang, Ng Wei Ming",
            role: "Directors of Policy",
            cell: "Internal",
          },
          {
            name: "Swareena Jain",
            role: "Director of Strategy",
            cell: "Internal",
          },
          {
            name: "Wan Yanbing",
            role: "Union Engagement Officer",
            cell: "Internal",
          },
          {
            name: "Sambhav Baid, Sayyid Harith, Winnie Tan, Anika W Lee",
            role: "Union Relations Officers",
            cell: "Internal",
          },
        ],
      },
      {
        name: "Kang Weixiang Roysten",
        role: "Vice-President (External)",
        cell: "External",
        children: [
          {
            name: "Teo Zheng Wei, Jewi",
            role: "Executive Assistant to the VP (External)",
            cell: "External",
          },
          {
            name: "Hay Mar Win",
            role: "Director of Global Relations Unit",
            cell: "External",
            children: [
              {
                name: "Rungrawin Chowiwattana",
                role: "Deputy Director of Global Relations Unit",
                cell: "External",
              },
            ],
          },
          {
            name: "Eugene Seet Ming Zhe",
            role: "Director of Training and Development",
            cell: "External",
            children: [
              {
                name: "Chloe Hoo Ziying & Megan Ho Jing Wen",
                role: "Deputy Directors of Training and Development",
                cell: "External",
              },
            ],
          },
          {
            name: "Lara Kaur Chal",
            role: "Director of Alumni Relations and Community Engagement Unit",
            cell: "External",
            children: [
              {
                name: "Ajay Singh Shergill & Wynter Sebastian Bryan",
                role: "Deputy Directors of Alumni Relations and Community Engagement",
                cell: "External",
              },
            ],
          },
          {
            name: "Chua Le Shan",
            role: "Director of Business Committee (BizCom)",
            cell: "External",
            children: [
              {
                name: "Chan Zhen-Yi, Pearl",
                role: "Deputy Director of Business Committee",
                cell: "External",
              },
            ],
          },
          {
            name: "Rebekah Tan",
            role: "President of International Students Relations",
            cell: "External",
            children: [
              {
                name: "Shamitha Sureshkumar",
                role: "Vice-President of International Students Relations",
                cell: "External",
              },
            ],
          },
        ],
      },
      {
        name: "Dhanalakshmi Karthigaiselvan",
        role: "General Secretary",
        cell: "Secretariat",
        children: [
          {
            name: "Austin Chan Jin Wei",
            role: "Director of Human Resources",
            cell: "Secretariat",
            children: [
              {
                name: "Sikka Arshin, Carol Chin Kai Rou, Niveditha Anoop",
                role: "Human Resources Associates",
                cell: "Secretariat",
              },
            ],
          },
          {
            name: "Tan Lip Guo",
            role: "Director of Logistics",
            cell: "Secretariat",
            children: [
              {
                name: "Shane Michael Santoso",
                role: "Logistics Associate",
                cell: "Secretariat",
              },
            ],
          },
          {
            name: "Navyaa",
            role: "Chief Secretary",
            cell: "Secretariat",
            children: [
              {
                name: "Xia He Dan & Zhang Xiyuan (Avery)",
                role: "Assistant Secretaries",
                cell: "Secretariat",
              },
              {
                name: "Shieh Wensy",
                role: "Legal Associate",
                cell: "Secretariat",
              },
            ],
          },
          {
            name: "Meline Notowibowo-Lomsche",
            role: "CommIT Chairperson",
            cell: "Secretariat",
            children: [
              {
                name: "Du LiYan",
                role: "CommIT Vice-Chairperson",
                cell: "Secretariat",
              },
            ],
          },
        ],
      },
      {
        name: "Huang Xiangrong",
        role: "Financial Secretary",
        cell: "Financial",
        children: [
          {
            name: "Guo Yujin",
            role: "Deputy Financial Secretary",
            cell: "Financial",
          },
          {
            name: "Tang Shiyuan",
            role: "Director of Finance (Funds)",
            cell: "Financial",
            children: [
              {
                name: "Advait Rajeev, A M Noorul Nagieb, HIEW Min Zong",
                role: "Deputy Directors of Finance (Funds)",
                cell: "Financial",
              },
            ],
          },
          {
            name: "Michelle Valerie Soe",
            role: "Director of Finance (Internal)",
            cell: "Financial",
            children: [
              {
                name: "Suchi Shah, Siddardha Reddy, Jerome Chua, Krish Jain",
                role: "Deputy Directors of Finance (Internal)",
                cell: "Financial",
              },
            ],
          },
          {
            name: "Tou Panchakdav & Zhang Shuhan",
            role: "Directors of NUSSU Venture Enterprise",
            cell: "Financial",
          },
        ],
      },
      {
        name: "Chew Qing Ru",
        role: "Student Life Secretary",
        cell: "Student Life",
        children: [
          {
            name: "Pending",
            role: "Executive Assistant to Student Life Secretary",
            cell: "Student Life",
          },
          {
            name: "Ong Hao Yang",
            role: "Senior Advisor",
            cell: "Student Life",
          },
          {
            name: "Lee Hui Zhen",
            role: "Deputy Student Life Secretary (Overall)",
            cell: "Student Life",
          },
          {
            name: "Chai Pei Fen",
            role: "Deputy Student Life Secretary (UC)",
            cell: "Student Life",
          },
          {
            name: "Tan Shu Hui",
            role: "Deputy Student Life Secretary (FOCC)",
            cell: "Student Life",
          },
          {
            name: "Ing Reiyi",
            role: "Deputy Student Life Secretary (Rag & Flag)",
            cell: "Student Life",
          },
          {
            name: "Michael",
            role: "Deputy Student Life Secretary (OHSV & SLF)",
            cell: "Student Life",
          },
          {
            name: "Sanjana Sindiri",
            role: "Deputy Student Life Secretary (SP)",
            cell: "Student Life",
          },
          {
            name: "Loh Yan Yu",
            role: "Deputy Student Life Secretary (External)",
            cell: "Student Life",
          },
          {
            name: "Chua Yin Ern",
            role: "Deputy Student Life Secretary (Internal)",
            cell: "Student Life",
          },
          {
            name: "Ivy YuYichen",
            role: "Director of SLC Publicity",
            cell: "Student Life",
          },
          {
            name: "Lim Jian Song",
            role: "Director of SLC Marketing",
            cell: "Student Life",
          },
          {
            name: "Singhal Manan",
            role: "Director of SLC Logistics",
            cell: "Student Life",
          },
          {
            name: "Jaanavi Anand",
            role: "Director of SLC Admin and Finance",
            cell: "Student Life",
          },
        ],
      },
      {
        name: "Koh Qi Jie",
        role: "Student Welfare Secretary",
        cell: "Student Welfare",
        children: [
          {
            name: "Subhashree Paneer",
            role: "Senior Advisor (SWS) & Data Analyst",
            cell: "Student Welfare",
          },
          {
            name: "Stacy Lee Sin Yee",
            role: "Director of Policy/S3",
            cell: "Student Welfare",
            children: [
              {
                name: "Zhu Puhuan & Lim Hui Yi Steffy",
                role: "Student Support Services (S3)/Student Welfare Policy Cell Executives",
                cell: "Student Welfare",
              },
            ],
          },
          {
            name: "Shreeya Chhabra",
            role: "Director of Retail & Dining",
            cell: "Student Welfare",
          },
          {
            name: "Tay Khai Ning",
            role: "Director of Transport & Infrastructure",
            cell: "Student Welfare",
          },
          {
            name: "Treruangrachada Kylin",
            role: "Director of Welfare Projects",
            cell: "Student Welfare",
            children: [
              {
                name: "Cheryl Lee Ying Xuan",
                role: "Senior Advisor (Welfare Projects)",
                cell: "Student Welfare",
              },
            ],
          },
          {
            name: "Andrea Fong Qian Ying",
            role: "Director of Marketing & Communications",
            cell: "Student Welfare",
          },
        ],
      },
    ],
  };

  const cellColors: CellColors = {
    Presidential: "#1e40af",
    Internal: "#0d9488",
    External: "#7c3aed",
    Secretariat: "#0891b2",
    Financial: "#ca8a04",
    Communications: "#dc2626",
    "Student Life": "#16a34a",
    "Student Welfare": "#f97316",
    default: "#6b7280",
  };

  // Modified tree layout algorithm with consistent spacing for 3rd+ level nodes
  const calculateLayout = (
    node: any,
    x0: number,
    y0: number,
    level = 0,
    siblingIndex = 0,
    siblingCount = 1
  ) => {
    if (!node) return;

    const nodeWidth = 220;
    const nodeHeight = 60;

    // Dynamic spacing based on selected cell
    const horizontalSpacing = selectedCell === "all" ? 25 : 20;
    const verticalSpacing = selectedCell === "all" ? 40 : 50;

    // Base position calculation
    let xPosition = x0 + level * (nodeWidth + horizontalSpacing);
    let yPosition = y0 + siblingIndex * (nodeHeight + verticalSpacing);

    // Only apply custom offsets when viewing ALL cells
    if (level === 1 && selectedCell === "all") {
      // These are the direct children of the President
      switch (node.role) {
        case "Communications Secretary":
          xPosition += 0;
          break;
        case "Vice-President (Internal)":
          xPosition += 800;
          yPosition -= 600;
          break;
        case "Vice-President (External)":
          xPosition += 1400;
          yPosition -= 900;
          break;
        case "General Secretary":
          xPosition += 2000;
          break;
        case "Financial Secretary":
          xPosition += 2000;
          yPosition += 600;
          break;
        case "Student Life Secretary":
          xPosition += 1400;
          yPosition += 0;
          break;
        case "Student Welfare Secretary":
          xPosition += 600;
          yPosition += 100;
          break;
      }
    }
    // Fixed spacing for 3rd level nodes and beyond
    else if (level >= 2) {
      // Use consistent vertical spacing for level 3+ nodes
      const l3VerticalSpacing = selectedCell === "all" ? 80 : 80;
      xPosition = node.parent?.x + nodeWidth + 50;
      yPosition = y0 + siblingIndex * l3VerticalSpacing;
    }

    // Set node position with custom offsets
    node.x = xPosition;

    // Add staggered pattern for children
    if (level > 0 && level < 2) {
      // Only apply staggering when viewing ALL cells
      if (selectedCell === "all") {
        const offset = siblingIndex % 2 === 0 ? 0 : nodeHeight * 0.8;
        node.y = yPosition + offset;
        node.offset = offset;
      } else {
        // Standard layout for filtered view
        node.y = yPosition;
        node.offset = 0;
      }
    } else if (level >= 2) {
      node.y = yPosition;
      node.offset = 0;
    } else {
      node.y = y0 + siblingIndex * (nodeHeight + verticalSpacing);
      node.offset = 0;
    }

    if (node.children) {
      const childCount = node.children.length;
      node.children.forEach((child: any, i: number) => {
        // Store parent reference for 3rd+ level positioning
        child.parent = node;

        if (level < 2) {
          calculateLayout(
            child,
            node.x + nodeWidth + horizontalSpacing,
            node.y -
              ((childCount - 1) * (nodeHeight + verticalSpacing)) / 2 +
              i * (nodeHeight + verticalSpacing),
            level + 1,
            i,
            childCount
          );
        } else {
          calculateLayout(child, node.x, node.y, level + 1, i, childCount);
        }
      });
    }
  };

  // Filter data based on selected cell
  const filterData = (data: any, selectedCell: any) => {
    if (selectedCell === "all") return data;

    // Clone the data to avoid mutating original
    const clone = JSON.parse(JSON.stringify(data));

    // Recursively filter nodes
    const filterNode = (node: any) => {
      if (!node) return null;

      // Keep this node if it matches selected cell
      const nodeMatches = node.cell === selectedCell;

      // Filter children
      if (node.children) {
        node.children = node.children
          .map(filterNode)
          .filter((n: any) => n !== null);
      }

      // Keep node if it matches or has matching children
      return nodeMatches || (node.children && node.children.length > 0)
        ? node
        : null;
    };

    return filterNode(clone);
  };

  // Draw the org chart with improved styling and interactivity
  const drawOrgChart = () => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = svgRef.current as SVGSVGElement;
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Set SVG dimensions
    svg.setAttribute("width", containerWidth.toString());
    svg.setAttribute("height", containerHeight.toString());
    svg.innerHTML = ""; // Clear previous content

    // Filter data based on selected cell
    const filteredData = filterData(orgData, selectedCell);

    // Calculate layout with adjusted starting position
    calculateLayout(filteredData, 50, containerHeight / 2);

    // Create a group for zoom and pan
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", `translate(${pan.x},${pan.y}) scale(${zoom})`);
    svg.appendChild(g);

    // Draw connections with improved curves for staggered layout
    const drawConnections = (node: any) => {
      if (!node || !node.children) return;

      node.children.forEach((child: typeof node) => {
        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );

        // Determine if nodes have dynamic heights
        const hasLongNodeRole = node.role && node.role.length > 25;
        const hasLongNodeName = node.name && node.name.length > 25;
        const hasLongChildRole = child.role && child.role.length > 25;
        const hasLongChildName = child.name && child.name.length > 25;

        // Calculate vertical center points for each node
        const nodeHeight =
          hasLongNodeRole && hasLongNodeName
            ? 80
            : hasLongNodeRole || hasLongNodeName
            ? 70
            : 60;
        const childHeight =
          hasLongChildRole && hasLongChildName
            ? 80
            : hasLongChildRole || hasLongChildName
            ? 70
            : 60;

        // Adjust the path based on sibling position
        const startX = node.x + 220;
        const startY = node.y + nodeHeight / 2;
        const endX = child.x;
        const endY = child.y + childHeight / 2;

        // Use different curve types based on whether we're viewing all cells or a specific cell
        let d;

        if (selectedCell === "all") {
          // Use curved paths for all cells view
          const controlX1 = startX + (endX - startX) * 0.3;
          const controlX2 = endX - (endX - startX) * 0.3;
          d = `M${startX},${startY} C${controlX1},${startY} ${controlX2},${endY} ${endX},${endY}`;
        } else {
          // Use simpler, more direct paths for specific cell views
          d = `M${startX},${startY} L${
            startX + (endX - startX) / 2
          },${startY} L${
            startX + (endX - startX) / 2
          },${endY} L${endX},${endY}`;
        }

        path.setAttribute("d", d);
        path.setAttribute(
          "stroke",
          child.cell ? cellColors[child.cell] : cellColors.default
        );
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");
        path.setAttribute("opacity", "0.8");
        g.appendChild(path);
        drawConnections(child);
      });
    };

    drawConnections(filteredData);

    // Draw nodes with improved styling and wider boxes
    const drawNode = (node: any) => {
      if (!node) return;

      const nodeGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      );
      nodeGroup.setAttribute("transform", `translate(${node.x},${node.y})`);

      // Create node box with hover effect
      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );

      // Determine if content requires a taller box
      const hasLongRole = node.role && node.role.length > 25;
      const hasLongName = node.name && node.name.length > 25;

      // Adjust height based on content
      let boxHeight = 60; // Default height
      if (hasLongRole && hasLongName) {
        boxHeight = 80; // Both role and name are long
      } else if (hasLongRole || hasLongName) {
        boxHeight = 70; // Either role or name is long
      }

      rect.setAttribute("width", "220");
      rect.setAttribute("height", boxHeight.toString());
      rect.setAttribute("rx", "8");
      rect.setAttribute("ry", "8");
      rect.setAttribute("fill", "white");
      rect.setAttribute(
        "stroke",
        node.cell ? cellColors[node.cell] : cellColors.default
      );
      rect.setAttribute("stroke-width", "2");
      rect.setAttribute("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");
      nodeGroup.appendChild(rect);

      // Add hover effect
      rect.addEventListener("mouseenter", () => {
        rect.setAttribute("filter", "drop-shadow(0 4px 8px rgba(0,0,0,0.2))");
        rect.setAttribute("stroke-width", "3");
      });
      rect.addEventListener("mouseleave", () => {
        rect.setAttribute("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");
        rect.setAttribute("stroke-width", "2");
      });

      // Create role text
      const role = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      role.setAttribute("x", "110");
      role.setAttribute("y", "18");
      role.setAttribute("text-anchor", "middle");
      role.setAttribute("font-size", "11");
      role.setAttribute("font-weight", "bold");
      role.setAttribute("fill", node.cell ? cellColors[node.cell] : "#4b5563");

      // Handle long role titles by wrapping text
      if (hasLongRole) {
        // Create two lines of text for long roles
        const words = node.role.split(" ");
        let line1 = "";
        let line2 = "";

        // Distribute words between two lines
        let currentLength = 0;
        words.forEach((word: string) => {
          if (currentLength + word.length < 25) {
            line1 += (line1 ? " " : "") + word;
            currentLength += word.length + 1;
          } else {
            line2 += (line2 ? " " : "") + word;
          }
        });

        // First line of role
        role.textContent = line1;

        // Second line of role
        if (line2) {
          const roleLine2 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
          );
          roleLine2.setAttribute("x", "110");
          roleLine2.setAttribute("y", "32");
          roleLine2.setAttribute("text-anchor", "middle");
          roleLine2.setAttribute("font-size", "11");
          roleLine2.setAttribute("font-weight", "bold");
          roleLine2.setAttribute(
            "fill",
            node.cell ? cellColors[node.cell] : "#4b5563"
          );
          roleLine2.textContent = line2;
          nodeGroup.appendChild(roleLine2);
        }
      } else {
        role.textContent = node.role;
      }
      nodeGroup.appendChild(role);

      // Create name text with improved handling of long names
      const name = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      name.setAttribute("x", "110");
      name.setAttribute("text-anchor", "middle");
      name.setAttribute("font-size", "12");
      name.setAttribute("fill", "#1f2937");

      // Adjust y position based on whether role has two lines
      const nameYPosition = node.role && node.role.length > 25 ? "46" : "40";
      name.setAttribute("y", nameYPosition);

      // Handle long names by wrapping text
      if (node.name && node.name.length > 25) {
        // Check if it's a list of names separated by commas or ampersand
        if (node.name.includes(",") || node.name.includes("&")) {
          const parts = node.name.split(/,|\s&\s/);
          if (parts.length > 1) {
            // First line of names
            name.textContent = parts[0];

            // Second line of names
            const nameLine2 = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "text"
            );
            nameLine2.setAttribute("x", "110");
            nameLine2.setAttribute("y", parseInt(nameYPosition) + 12 + "");
            nameLine2.setAttribute("text-anchor", "middle");
            nameLine2.setAttribute("font-size", "12");
            nameLine2.setAttribute("fill", "#1f2937");
            nameLine2.textContent = parts.slice(1).join(", ");
            nodeGroup.appendChild(nameLine2);
          }
        } else {
          // Split non-comma separated long names
          const words = node.name.split(" ");
          let line1 = "";
          let line2 = "";

          // Distribute words between two lines
          let currentLength = 0;
          words.forEach((word: string) => {
            if (currentLength + word.length < 25) {
              line1 += (line1 ? " " : "") + word;
              currentLength += word.length + 1;
            } else {
              line2 += (line2 ? " " : "") + word;
            }
          });

          name.textContent = line1;

          if (line2) {
            const nameLine2 = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "text"
            );
            nameLine2.setAttribute("x", "110");
            nameLine2.setAttribute("y", parseInt(nameYPosition) + 12 + "");
            nameLine2.setAttribute("text-anchor", "middle");
            nameLine2.setAttribute("font-size", "12");
            nameLine2.setAttribute("fill", "#1f2937");
            nameLine2.textContent = line2;
            nodeGroup.appendChild(nameLine2);
          }
        }
      } else {
        name.textContent = node.name || "";
      }
      nodeGroup.appendChild(name);

      // Add cell label
      if (node.cell) {
        const cell = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        cell.setAttribute("x", "110");
        cell.setAttribute("text-anchor", "middle");
        cell.setAttribute("font-size", "9");
        cell.setAttribute("font-weight", "bold");
        cell.setAttribute(
          "fill",
          node.cell ? cellColors[node.cell] : cellColors.default
        );

        // Adjust y position based on whether name has two lines
        const hasLongRole = node.role && node.role.length > 25;
        const hasLongName = node.name && node.name.length > 25;

        // Calculate cell position based on box height
        let cellYPosition;

        if (hasLongRole && hasLongName) {
          cellYPosition = boxHeight - 12;
        } else if (hasLongRole || hasLongName) {
          cellYPosition = boxHeight - 10;
        } else {
          cellYPosition = boxHeight - 8;
        }

        cell.setAttribute("y", cellYPosition.toString());
        cell.textContent = node.cell;
        nodeGroup.appendChild(cell);
      }

      g.appendChild(nodeGroup);

      if (node.children) {
        node.children.forEach(drawNode);
      }
    };

    drawNode(filteredData);
  };

  // Handle zoom and pan
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      const newZoom = Math.min(Math.max(0.5, zoom + delta), 2);
      setZoom(newZoom);
    };

    const handleMouseDown = (e: MouseEvent) => {
      const startX = e.clientX - pan.x;
      const startY = e.clientY - pan.y;

      const handleMouseMove = (e: MouseEvent) => {
        setPan({
          x: e.clientX - startX,
          y: e.clientY - startY,
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleWheel);
      containerRef.current.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleWheel);
        containerRef.current.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [zoom, pan]);

  // Draw org chart when component mounts or selectedCell changes
  useEffect(() => {
    drawOrgChart();
  }, [selectedCell, zoom, pan]);

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">
        NUSSU EXCO Organization Chart
      </h1>

      {/* Cell filter buttons with improved styling */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded-lg transition-all duration-200 ${
            selectedCell === "all"
              ? "bg-gray-800 text-white shadow-lg"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedCell("all")}
        >
          All Cells
        </button>
        {Object.keys(cellColors)
          .filter((cell) => cell !== "default")
          .map((cell) => (
            <button
              key={cell}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedCell === cell
                  ? "text-white shadow-lg"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
              style={{
                backgroundColor:
                  selectedCell === cell ? cellColors[cell] : "#e5e7eb",
              }}
              onClick={() => setSelectedCell(cell)}
            >
              {cell}
            </button>
          ))}
      </div>

      {/* Chart container with improved styling */}
      <div
        ref={containerRef}
        className="overflow-hidden border border-gray-200 bg-white rounded-lg shadow-lg"
        style={{ height: "80vh", width: "100%" }}
      >
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default NussuOrgChart;
