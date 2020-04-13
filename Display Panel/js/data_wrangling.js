var raw_memory = {
	frame_count: 0,
	sec_utc: 0,
	at_eng_mode: 0,
	capt_roll_eng: 0,
	capt_roll_arm: 0,
	capt_pit_eng: 0,
	capt_pit_arm: 0,
	capt_cws_pit: 0,
	capt_cws_roll: 0,
	capt_ap_stat: 0,
	fo_roll_eng: 0,
	fo_roll_arm: 0,
	fo_pit_eng: 0,
	fo_pit_arm: 0,
	fo_cws_pit: 0,
	fo_cws_roll: 0,
	fo_ap_stat: 0,
	capt_cmd_pit_dev: 0,
	fo_cmd_pit_dev: 0,
	capt_cmd_roll_dev: 0,
	fo_cmd_roll_dev: 0,
	ils_1_gs_dev: 0,
	ils_1_loc_dev: 0,
	ils_2_gs_dev: 0,
	ils_2_loc_dev: 0,
	mcp_crs_1_ds: 0,
	mcp_crs_2_ds: 0,
	mcp_ias_mach_ds: 0,
	mcp_hdg_ds: 0,
	mcp_alt_ds: 0,
	mcp_vert_spd_ds: 0,
	mcp_n1: 0,
	mcp_spd: 0,
	mcp_lvl_spd: 0,
	mcp_vnav: 0,
	mcp_lnav: 0,
	mcp_vor_loc: 0,
	mcp_apprh: 0,
	mcp_hdg_sel: 0,
	mcp_alt_hld: 0,
	mcp_vert_spd: 0,
	mcp_cmd_a: 0,
	mcp_cmd_b: 0,
	mcp_cws_a: 0,
	mcp_cws_b: 0,
	mcp_fd_1: 0,
	mcp_fd_2: 0,
	mcp_at_arm: 0,
	mcp_cross_over: 0,
	mcp_spd_intv: 0,
	mcp_bank_angle_max: 0,
	mcp_alt_intv: 0,
	mcp_mstr_lt_1: 0,
	mcp_mstr_lt_2: 0,
	mcp_at_arm_lt: 0,
	cap_ef_min_alt: 0,
	cap_ef_min_adj: 0,
	cap_ef_min_cur_alt: 0,
	cap_ef_min_rst: 0,
	cap_ef_fpv: 0,
	cap_ef_mtrs: 0,
	cap_ef_baro: 0,
	cap_ef_baro_adj: 0,
	cap_ef_baro_cur: 0,
	cap_ef_baro_std: 0,
	cap_ef_1_ptr: 0,
	cap_ef_nd_mode: 0,
	cap_ef_ctr_nd: 0,
	cap_ef_rnge: 0,
	cap_ef_tfc: 0,
	cap_ef_2_ptr: 0,
	cap_ef_wxr: 0,
	cap_ef_sta: 0,
	cap_ef_wpt: 0,
	cap_ef_arpt: 0,
	cap_ef_data: 0,
	cap_ef_pos: 0,
	cap_ef_terri: 0,
	fo_ef_min_alt: 0,
	fo_ef_min_adj: 0,
	fo_ef_min_cur_alt: 0,
	fo_ef_min_rst: 0,
	fo_ef_fpv: 0,
	fo_ef_mtrs: 0,
	fo_ef_baro: 0,
	fo_ef_baro_adj: 0,
	fo_ef_baro_cur: 0,
	fo_ef_baro_std: 0,
	fo_ef_1_ptr: 0,
	fo_ef_nd_mode: 0,
	fo_ef_ctr_nd: 0,
	fo_ef_rnge: 0,
	fo_ef_tfc: 0,
	fo_ef_2_ptr: 0,
	fo_ef_wxr: 0,
	fo_ef_sta: 0,
	fo_ef_wpt: 0,
	fo_ef_arpt: 0,
	fo_ef_data: 0,
	fo_ef_pos: 0,
	fo_ef_terri: 0,
	cal_as: 0,
	true_as: 0,
	gnd_spd: 0,
	rate_of_clb: 0,
	pres_alt: 0,
	height_above_teri: 0,
	radio_alt: 0,
	pitch_angle: 0,
	roll_angle: 0,
	hdg_angle: 0,
	angle_of_attack: 0,
	sideslip_angle: 0,
	loc_dev: 0,
	glideslope_dev: 0,
	lat: 0,
	long: 0,
	on_gnd: 0,
	mag_track_angle: 0,
	mag_hdg_angle: 0,
	x_pos_rwy_td: 0,
	y_pos_rwy_td: 0,
	z_pos_rwy_td: 0,
	column_pos: 0,
	wheel_pos: 0,
	rudder_pos: 0,
	rudder_trim: 0,
	throttle_1_pos: 0,
	throttle_2_pos: 0,
	ailerion_l_pos: 0,
	aileron_r_pos: 0,
	elevator_l_pos: 0,
	elevator_r_pos: 0,
	rudder_pos: 0,
	hori_stab_pos: 0,
	flap_angle: 0,
	spoiler_pos: 0,
	pitch_rate: 0,
	roll_rate: 0,
	yaw_rate: 0,
	x_body_accel: 0,
	y_body_accel: 0,
	z_body_accel: 0,
	load_fac_x: 0,
	load_fac_y: 0,
	load_fac_z: 0,
	static_temp: 0,
	eng_n1_1: 0,
	eng_n1_2: 0,
	eng_fuel_lvr_1: 0,
	eng_fuel_lvr_2: 0,
	l_fuel_tank_qty: 0,
	ctr_fuel_tank_qty: 0,
	r_fuel_tank_qty: 0,
	turb_x_comp: 0,
	turb_y_comp: 0,
	turb_z_comp: 0,
	wind_dir_at_ac: 0,
	wind_spd_at_ac: 0,
	stick_shaker_cap: 0,
	stick_shaker_fo: 0,
	brake_pos_l: 0,
	brake_pos_r: 0,
	mstr_caution: 0,
	capt: 0,
	ap_discon: 0,
	fo_ap_discon: 0,
	ap_caut_lt: 0,
	ap_warn_lt: 0,
	ap_discon_horn: 0,
	alt_warn_horn: 0,
	ovr_spd_clkr: 0,
	at_1_discon: 0,
	at_2_discon: 0,
	at_caut_lt: 0,
	at_warn_lt: 0,
	to_sw_1: 0,
	to_sw_2: 0,
	to_warn_lt: 0,
	lnding_gear_handle: 0,
	l_lnd_gr_pos_lt: 0,
	n_lnd_gr_pos_lt: 0,
	r_lnd_gr_pos_lt: 0,
	tiller_pos: 0,
	cap_trim_sw: 0,
	fo_trim_sw: 0,
	st_trim_main_off: 0,
	st_trim_ap_off: 0,
	FMC_alert_lt: 0,
	V1: 0,
	VR: 0,
	v2: 0,
	vref: 0,
	capt_vsd_on: 0,
	fo_vsd_on: 0,
	auto_bk_sw: 0,
	auto_bk_inop_lt: 0,
	anti_skid_inop_lt: 0,
	prk_brk_lt: 0,
	event_mkr: 0,
	spd_brk_arm: 0,
	spd_brk_do_not_arm: 0,
	to_horn: 0,
	ail_trim_r: 0,
	rnp_vert: 0,
	anp_vert: 0,
	rnp_lat: 0,
	anp_lat: 0,
	rnp_vert_dev: 0,
	stab_out_trim: 0,
	cabin_alt_wrn_lt: 0,
	capt_bel_gs_lt: 0,
	fo_bel_gs_lt: 0,
	le_flap_tran_lt: 0,
	LE_flap_ext_lt: 0,
	mc_capt_flt_contrl: 0,
	mc_capt_irs: 0,
	mc_capt_fuel: 0,
	mc_capt_elec: 0,
	mc_capt_apu: 0,
	mc_capt_det: 0,
	mc_cap_recall: 0,
	mc_fo_anti_ice: 0,
	mc_fo_hyd: 0,
	mc_fo_doors: 0,
	mc_fo_eng: 0,
	mc_fo_ovrhd: 0,
	mc_fo_aircond: 0,
	mc_fo_recall: 0,
	fire_wrn_lts: 0,
	fo_mc_lts: 0,
	spdbrk_ext_lt: 0
}