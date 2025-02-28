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
  const svgRef = useRef<SVGSVGElement>(null);

  // Define the hierarchical structure based on the NUSSU organization
  const orgData = {
    name: "NUSSU EXCO",
    role: "",
    children: [
      {
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
      },
    ],
  };

  const cellColors: CellColors = {
    Presidential: "#334155",
    Internal: "#475569",
    External: "#64748b",
    Secretariat: "#94a3b8",
    Financial: "#cbd5e1",
    Communications: "#e2e8f0",
    "Student Life": "#f1f5f9",
    "Student Welfare": "#f8fafc",
    default: "#94a3b8",
  };

  // Tree layout algorithm (simplified)
  const calculateLayout = (
    node: any,
    x0: any,
    y0: any,
    breadth: any,
    depth: any,
    level = 0
  ) => {
    if (!node) return;

    const nodeWidth = 220;
    const nodeHeight = 50;
    const verticalSpacing = 30;

    // Set node position
    node.x = x0;
    node.y = y0 + level * (nodeHeight + verticalSpacing);

    if (node.children) {
      const childCount = node.children.length;
      const childBreadth = breadth / childCount;

      node.children.forEach((child: any, i: any) => {
        const childX = x0 - breadth / 2 + childBreadth * (i + 0.5);
        calculateLayout(
          child,
          childX,
          node.y + nodeHeight,
          childBreadth,
          depth,
          level + 1
        );
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

  // Draw the org chart
  const drawOrgChart = () => {
    if (!svgRef.current) return;

    const svg = svgRef.current as SVGSVGElement;
    const container = svg.parentElement;
    if (!container) return;
    const width = 15000;
    const height = 2500; // Fixed height, can be adjusted

    // Set SVG dimensions
    svg.setAttribute("width", width.toString());
    svg.setAttribute("height", height.toString());
    svg.innerHTML = ""; // Clear previous content

    // Filter data based on selected cell
    const filteredData = filterData(orgData, selectedCell);

    // Calculate layout
    calculateLayout(filteredData, width / 2, 50, width * 0.8, height * 0.8);

    // Draw connections first (so they're behind nodes)
    const drawConnections = (node: any) => {
      if (!node || !node.children) return;

      node.children.forEach((child: typeof node) => {
        // Create path from parent to child
        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        const d = `M${node.x},${node.y + 70} C${node.x},${node.y + 95} ${
          child.x
        },${child.y - 25} ${child.x},${child.y}`;
        path.setAttribute("d", d);
        path.setAttribute(
          "stroke",
          child.cell ? cellColors[child.cell] : cellColors.default
        );
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");
        svg.appendChild(path);

        // Recursively draw child connections
        drawConnections(child);
      });
    };

    drawConnections(filteredData);

    // Draw nodes
    const drawNode = (node: any) => {
      if (!node) return;

      // Create node group
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `translate(${node.x - 110},${node.y})`);

      // Create node box
      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect.setAttribute("width", "220");
      rect.setAttribute("height", "70");
      rect.setAttribute("rx", "6");
      rect.setAttribute("ry", "6");
      rect.setAttribute("fill", "white");
      rect.setAttribute(
        "stroke",
        node.cell ? cellColors[node.cell] : cellColors.default
      );
      rect.setAttribute("stroke-width", "2");
      g.appendChild(rect);

      // Create role text
      const role = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      role.setAttribute("x", "110");
      role.setAttribute("y", "25");
      role.setAttribute("text-anchor", "middle");
      role.setAttribute("font-size", "12");
      role.setAttribute("font-weight", "bold");
      role.setAttribute("fill", "#4b5563");
      role.textContent = node.role;
      g.appendChild(role);

      // Create name text
      const name = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      name.setAttribute("x", "110");
      name.setAttribute("y", "45");
      name.setAttribute("text-anchor", "middle");
      name.setAttribute("font-size", "14");
      name.setAttribute("fill", "#1f2937");

      // Handle long names
      if (node.name && node.name.length > 25) {
        // Split name into parts if it contains commas (multiple names)
        const parts = node.name.split(", ");
        if (parts.length > 1) {
          name.textContent = parts[0] + "...";

          // Create tooltip text
          const title = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "title"
          );
          title.textContent = node.name;
          name.appendChild(title);
        } else {
          // Just truncate the long name
          name.textContent = node.name.substring(0, 25) + "...";

          // Create tooltip text
          const title = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "title"
          );
          title.textContent = node.name;
          name.appendChild(title);
        }
      } else {
        name.textContent = node.name || "";
      }
      g.appendChild(name);

      // Add cell label if available
      if (node.cell) {
        const cell = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        cell.setAttribute("x", "110");
        cell.setAttribute("y", "60");
        cell.setAttribute("text-anchor", "middle");
        cell.setAttribute("font-size", "10");
        cell.setAttribute(
          "fill",
          node.cell ? cellColors[node.cell] : cellColors.default
        );
        cell.textContent = node.cell;
        g.appendChild(cell);
      }

      svg.appendChild(g);

      // Recursively draw child nodes
      if (node.children) {
        node.children.forEach(drawNode);
      }
    };

    drawNode(filteredData);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      drawOrgChart();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Draw org chart when component mounts or selectedCell changes
  useEffect(() => {
    drawOrgChart();
  }, [selectedCell]);

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">
        NUSSU EXCO Organization Chart
      </h1>

      {/* Cell filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          className={`px-3 py-1 rounded ${
            selectedCell === "all" ? "bg-gray-800 text-white" : "bg-gray-200"
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
              className={`px-3 py-1 rounded ${
                selectedCell === cell ? "text-white" : "text-gray-800"
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

      <div
        className="overflow-auto border border-gray-200 bg-white rounded-lg"
        style={{ height: "70vh", width: "100%" }}
      >
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default NussuOrgChart;
