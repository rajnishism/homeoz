import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Badge,
  Grid,
  Card,
  CardContent,
  CardHeader,
  AvatarGroup,
  Tooltip,
  Switch,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  People as PeopleIcon,
  Inbox as InboxIcon,
  Logout as LogoutIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

// Recharts for quick charts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// --- Sample data ---
const lineData = [
  { name: "Mon", uv: 400 },
  { name: "Tue", uv: 300 },
  { name: "Wed", uv: 500 },
  { name: "Thu", uv: 200 },
  { name: "Fri", uv: 278 },
  { name: "Sat", uv: 189 },
  { name: "Sun", uv: 239 },
];

const barData = [
  { name: "Week 1", sales: 4000 },
  { name: "Week 2", sales: 3000 },
  { name: "Week 3", sales: 5000 },
  { name: "Week 4", sales: 2000 },
];

const pieData = [
  { name: "Chrome", value: 55 },
  { name: "Safari", value: 25 },
  { name: "Firefox", value: 12 },
  { name: "Others", value: 8 },
];

const listItems = [
  { id: 1, title: "Order #1024", subtitle: "Paid • 2 items", avatar: "A" },
  { id: 2, title: "Order #1023", subtitle: "Pending • 1 item", avatar: "B" },
  { id: 3, title: "Order #1022", subtitle: "Shipped • 4 items", avatar: "C" },
  { id: 4, title: "Order #1021", subtitle: "Refunded • 1 item", avatar: "D" },
];

const drawerWidth = 260;

export default function MaterialUiDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dense, setDense] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar sx={{ bgcolor: "primary.main" }}>MG</Avatar>
        <Box>
          <Typography variant="subtitle1">MaterialGen</Typography>
          <Typography variant="caption" color="text.secondary">
            Admin Dashboard
          </Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {[
          { text: "Dashboard", icon: <DashboardIcon /> },
          { text: "Analytics", icon: <BarChartIcon /> },
          { text: "Reports", icon: <PieChartIcon /> },
          { text: "Users", icon: <PeopleIcon /> },
          { text: "Inbox", icon: <InboxIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Settings", icon: <SettingsIcon /> },
          { text: "Logout", icon: <LogoutIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="bg-primary"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <Tooltip title="Toggle dense list">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
              <Typography variant="body2">Dense</Typography>
              <Switch
                checked={dense}
                onChange={() => setDense(!dense)}
                size="small"
              />
            </Box>
          </Tooltip>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" sx={{ ml: 1 }}>
            <Avatar src="" alt="You">
              R
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for md+ */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Top summary cards */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardHeader title="Revenue" subheader="$12,430" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Monthly revenue total and small sparkline.
                </Typography>
                <Box sx={{ height: 120 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData}>
                      <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#1976d2"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardHeader title="Active Users" subheader="1,234" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Currently active users on the platform.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <AvatarGroup max={4} sx={{ justifyContent: "flex-start" }}>
                    <Avatar>A</Avatar>
                    <Avatar>B</Avatar>
                    <Avatar>C</Avatar>
                    <Avatar>D</Avatar>
                    <Avatar>E</Avatar>
                  </AvatarGroup>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardHeader title="Orders" subheader="342" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Orders placed this week.
                </Typography>
                <Box sx={{ mt: 2, height: 120 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ReTooltip />
                      <Bar dataKey="sales" fill="#1976d2" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardHeader title="Browser Share" subheader="(last 30d)" />
              <CardContent>
                <Box sx={{ height: 160 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={60}
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              ["#1976d2", "#9c27b0", "#ff9800", "#66bb6a"][
                                index % 4
                              ]
                            }
                          />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Middle - Two column detailed area */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardHeader title="Sales Trend" subheader="Last 7 days" />
              <CardContent sx={{ height: 340 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={lineData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ReTooltip />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#1976d2"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title="Recent Orders"
                subheader="Most recent transactions"
              />
              <CardContent>
                <List dense={dense}>
                  {listItems.map((it) => (
                    <ListItem key={it.id} sx={{ px: 0 }}>
                      <ListItemButton>
                        <ListItemIcon>
                          <Avatar>{it.avatar}</Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={it.title}
                          secondary={it.subtitle}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Box sx={{ height: 16 }} />

            <Card>
              <CardHeader title="Quick Actions" />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item>
                    <Card sx={{ p: 1 }}>
                      <CardContent>
                        <Typography variant="subtitle2">
                          Create Report
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item>
                    <Card sx={{ p: 1 }}>
                      <CardContent>
                        <Typography variant="subtitle2">Export Data</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer actions */}
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Notifications</Typography>
                  <Typography variant="body2" color="text.secondary">
                    You have 3 unread notifications. Click the bell in the
                    header to view.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <Card>
                <CardHeader title="Team" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Recent active members and collaborators.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
