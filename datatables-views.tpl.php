<div class="dataTables_scroll">
	<div class="dataTables_scrollHead" style="overflow: auto; position: relative; border: 0px; width: 100%;">
		<div class="dataTables_scrollHeadInner" style="box-sizing: content-box; width: 98%; padding-right: 19px;">
		<div class="dataTables_scrollBody" style="position: relative; overflow: auto; max-height: 550px; width: 100%;">
		<table id="<?php print $id ?>" class="<?php print $classes; ?> display nowrap dataTable no-footer"<?php print $attributes; ?> cellspacing="0" width="100%" role="grid" style="margin-left: 0px; width: 732px;">
		  <?php if (!empty($title)) : ?>
			<caption><?php print $title; ?></caption>
		  <?php endif; ?>
		  <thead>
			<tr>
			  <?php foreach ($header as $field => $label): ?>
				<th class="info views-field views-field-<?php print $fields[$field]; ?>">
				  <?php print $label; ?>
				</th>
			  <?php endforeach; ?>
			</tr>
		  </thead>
		</div>
	</div>
	
		
	<tbody>
    <?php foreach ($rows as $count => $row): ?>
      <tr role="row" class="<?php print implode(' ', $row_classes[$count]); ?>">
        <?php foreach ($row as $field => $content): ?>
          <td class="views-field views-field-<?php print $fields[$field]; ?>">
            <?php print $content; ?>
          </td>
        <?php endforeach; ?>
      </tr>
    <?php endforeach; ?>
	</tbody> 
	</div>

	<div class="dataTables_scrollBody" style="position: relative; overflow: auto; max-height: 200px; width: 100%;">
	<!-- Penambahan script kolom baru untuk MultiFilter DataTables added by Ade 24/10/2015 -->  
	<?php
	$options = $view->style_plugin->options;
	if ($options['elements']['multi_filter']) { ?>
	<tfoot>
		<tr>		
			<?php foreach ($header as $field => $label): ?>
				<th><input type="text" class="search_init" value="" /></th>
			<?php endforeach; ?>
		</tr>
	</tfoot>
	<?php } ?>
	<!-- END penambahan script kolom MultiFilter -->
	</div>
</table>
</div>

